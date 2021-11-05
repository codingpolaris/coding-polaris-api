import { Injectable } from '@nestjs/common';
import { CreateReParticipateDto } from './dto/create-re-participate.dto';
import { UpdateReParticipateDto } from './dto/update-re-participate.dto';

@Injectable()
export class ReParticipatesService {
  create(createReParticipateDto: CreateReParticipateDto) {
    return 'This action adds a new reParticipate';
  }

  findAll() {
    return `This action returns all reParticipates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reParticipate`;
  }

  update(id: number, updateReParticipateDto: UpdateReParticipateDto) {
    return `This action updates a #${id} reParticipate`;
  }

  remove(id: number) {
    return `This action removes a #${id} reParticipate`;
  }
}
