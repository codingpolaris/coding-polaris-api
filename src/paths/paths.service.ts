import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';
import { Path } from './entities/path.entity';

@Injectable()
export class PathsService {
  constructor(
    @InjectRepository(Path)
    private pathRepository: Repository<Path>,
  ) {}

  create(createPathDto: CreatePathDto) {
    return this.pathRepository.save(createPathDto);
  }

  findAll() {
    return this.pathRepository.find();
  }

  findOne(id: number) {
    return this.pathRepository.findOne(id);
  }

  update(id: number, updatePathDto: UpdatePathDto) {
    return this.pathRepository.update(id, updatePathDto);
  }

  async remove(id: number): Promise<void> {
    await this.pathRepository.delete(id);
  }
}
