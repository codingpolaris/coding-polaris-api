import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { CharactersService } from 'src/characters/characters.service';

const saltRounds = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private charactersService: CharactersService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    bcrypt.hash(createUserDto.password, saltRounds).then(async (hash) => {
      createUserDto.password = hash;
      await this.usersRepository.save(createUserDto).then((user) => {
        return this.charactersService.create(user);
      });
    });
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
}
