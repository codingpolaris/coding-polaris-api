import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharactersPathDto } from '../dto/create-characters-path.dto';
import { UpdateCharactersPathDto } from '../dto/update-characters-path.dto';
import { CharactersPath } from '../entities/characters-path.entity';

@Injectable()
export class CharactersPathsService {
  constructor(
    @InjectRepository(CharactersPath)
    private charactersPathRepository: Repository<CharactersPath>,
  ) {}
  create(createCharactersPathDto: CreateCharactersPathDto) {
    return this.charactersPathRepository.save(createCharactersPathDto);
  }

  find(id: string) {
    return this.charactersPathRepository.find({
      relations: ['path', 'character'],
      where: { character: id },
    });
  }

  findOne(id: number) {
    return this.charactersPathRepository.findOne(id, {
      relations: ['path', 'character'],
    });
  }

  update(id: number, updateCharactersPathDto: UpdateCharactersPathDto) {
    return this.charactersPathRepository.update(id, updateCharactersPathDto);
  }

  async remove(id: number): Promise<void> {
    await this.charactersPathRepository.delete(id);
  }
}
