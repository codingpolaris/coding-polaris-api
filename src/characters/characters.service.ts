import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}
  async create(user: User) {
    const createCharacterDto = new CreateCharacterDto();
    createCharacterDto.user = user;
    return this.characterRepository.save(createCharacterDto);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.characterRepository.update(id, updateCharacterDto);
  }

  find(id: number): Promise<Character> {
    return this.characterRepository.findOne(id, {
      relations: ['user'],
      where: { user: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
