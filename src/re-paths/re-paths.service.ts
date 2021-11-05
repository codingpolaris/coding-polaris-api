import { Injectable } from '@nestjs/common';
import { CreateRePathDto } from './dto/create-re-path.dto';
import { UpdateRePathDto } from './dto/update-re-path.dto';

@Injectable()
export class RePathsService {
  create(createRePathDto: CreateRePathDto) {
    return 'This action adds a new rePath';
  }

  findAll() {
    return `This action returns all rePaths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rePath`;
  }

  update(id: number, updateRePathDto: UpdateRePathDto) {
    return `This action updates a #${id} rePath`;
  }

  remove(id: number) {
    return `This action removes a #${id} rePath`;
  }
}
