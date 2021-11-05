import { Injectable } from '@nestjs/common';
import { CreateRePerformDto } from './dto/create-re-perform.dto';
import { UpdateRePerformDto } from './dto/update-re-perform.dto';

@Injectable()
export class RePerformsService {
  create(createRePerformDto: CreateRePerformDto) {
    return 'This action adds a new rePerform';
  }

  findAll() {
    return `This action returns all rePerforms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rePerform`;
  }

  update(id: number, updateRePerformDto: UpdateRePerformDto) {
    return `This action updates a #${id} rePerform`;
  }

  remove(id: number) {
    return `This action removes a #${id} rePerform`;
  }
}
