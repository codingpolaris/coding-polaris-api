import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
  create(createCharacterDto: CreateCharacterDto) {
    return this.characterRepository.save(createCharacterDto);
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return this.characterRepository.update(id, updateCharacterDto);
  }

  findAll(): Promise<Character[]> {
    return this.characterRepository.find({ relations: ['user'] });
  }

  findOne(id: number): Promise<Character> {
    return this.characterRepository.findOne(id, { relations: ['user'] });
  }

  async remove(id: number): Promise<void> {
    await this.characterRepository.delete(id);
  }
}
