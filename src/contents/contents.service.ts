import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { Content } from './entities/content.entity';

@Injectable()
export class ContentsService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
  ) {}
  create(createContentDto: CreateContentDto) {
    return this.contentRepository.save(createContentDto);
  }

  find(id: string): Promise<Content[]> {
    return this.contentRepository.find({
      relations: ['theme'],
      where: { theme: id },
    });
  }

  findOne(id: number): Promise<Content> {
    return this.contentRepository.findOne(id, { relations: ['theme'] });
  }

  update(id: number, updateContentDto: UpdateContentDto) {
    return this.contentRepository.update(id, updateContentDto);
  }

  async remove(id: number): Promise<void> {
    await this.contentRepository.delete(id);
  }
}
