import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { Theme } from './entities/theme.entity';

@Injectable()
export class ThemesService {
  constructor(
    @InjectRepository(Theme)
    private themeRepository: Repository<Theme>,
  ) {}
  create(createThemeDto: CreateThemeDto) {
    return this.themeRepository.save(createThemeDto);
  }

  findAll() {
    return this.themeRepository.find();
  }

  findOne(id: number) {
    return this.themeRepository.findOne(id);
  }

  update(id: number, updateThemeDto: UpdateThemeDto) {
    return this.themeRepository.update(id, updateThemeDto);
  }

  async remove(id: number): Promise<void> {
    await this.themeRepository.delete(id);
  }
}
