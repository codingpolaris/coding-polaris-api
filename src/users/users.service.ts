import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CharactersService } from 'src/characters/characters.service';
import Mail from '../mail/mail';

const saltRounds = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private charactersService: CharactersService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const password = await bcrypt.hash(createUserDto.password, saltRounds);
    createUserDto.password = password;
    return await this.usersRepository.save(createUserDto);
  }

  async createCharacter(user: User) {
    return await this.charactersService.create(user);
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ username });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  findEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ email });
  }

  async updatePassword(user: User, isRecover: boolean) {
    let newPassword = user.password;
    if (isRecover) {
      newPassword = user.username + Math.floor(Math.random() * (10 + 1));
    }
    const password = await bcrypt.hash(newPassword, saltRounds);
    this.usersRepository.update(user.id, { password: password });
    if (isRecover) {
      return this.sendEmail(user.email, newPassword);
    }
  }

  sendEmail(email: string, password: string) {
    Mail.to = email;
    Mail.subject = 'Nova Senha';
    Mail.message = `Sua nova senha é ${password}`;
    const result = Mail.sendMail();
    return result;
  }
}
