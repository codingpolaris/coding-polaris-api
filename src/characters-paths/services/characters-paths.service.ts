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

  findByUserPath(characterId: string, pathid: string) {
    return this.charactersPathRepository.findOne({
      relations: ['path', 'character'],
      where: { character: characterId, path: pathid },
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

  async completeUpdate(
    pathId: string,
    characterId: string,
    isCompleted: boolean,
  ) {
    const path = await this.findByUserPath(characterId, pathId);
    const updateCharactersPathDto = new UpdateCharactersPathDto();
    updateCharactersPathDto.isCompleted = isCompleted;
    return this.charactersPathRepository.update(path, updateCharactersPathDto);
  }

  async remove(id: number): Promise<void> {
    await this.charactersPathRepository.delete(id);
  }
}
