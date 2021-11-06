import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharactersThemeDto } from '../dto/create-characters-theme.dto';
import { UpdateCharactersThemeDto } from '../dto/update-characters-theme.dto';
import { CharactersTheme } from '../entities/characters-theme.entity';

@Injectable()
export class CharactersThemesService {
  constructor(
    @InjectRepository(CharactersTheme)
    private charactersThemeRepository: Repository<CharactersTheme>,
  ) {}
  create(createCharactersThemeDto: CreateCharactersThemeDto) {
    return this.charactersThemeRepository.save(createCharactersThemeDto);
  }

  findAll() {
    return this.charactersThemeRepository.find({
      relations: ['theme', 'character'],
    });
  }

  findOne(id: number) {
    return this.charactersThemeRepository.findOne(id, {
      relations: ['theme', 'character'],
    });
  }

  update(id: number, updateCharactersThemeDto: UpdateCharactersThemeDto) {
    return this.charactersThemeRepository.update(id, updateCharactersThemeDto);
  }

  async remove(id: number): Promise<void> {
    await this.charactersThemeRepository.delete(id);
  }
}
