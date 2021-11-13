import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThemePathDto } from '../dto/create-theme-path.dto';
import { UpdateThemePathDto } from '../dto/update-theme-path.dto';
import { ThemePath } from '../entities/theme-path.entity';

@Injectable()
export class ThemePathsService {
  constructor(
    @InjectRepository(ThemePath)
    private themePathRepository: Repository<ThemePath>,
  ) {}
  create(createThemePathDto: CreateThemePathDto) {
    return this.themePathRepository.save(createThemePathDto);
  }

  findAll(id: string) {
    return this.themePathRepository.find({
      relations: ['theme', 'path'],
      where: { path: id },
    });
  }

  findOne(id: number) {
    return this.themePathRepository.findOne(id, {
      relations: ['theme', 'path'],
    });
  }

  update(id: number, updateThemePathDto: UpdateThemePathDto) {
    return this.themePathRepository.update(id, updateThemePathDto);
  }

  async remove(id: number): Promise<void> {
    await this.themePathRepository.delete(id);
  }
}
