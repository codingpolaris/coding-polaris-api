import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}
  create(createAnswerDto: CreateAnswerDto) {
    return this.answerRepository.save(createAnswerDto);
  }
  find(id: string): Promise<CreateAnswerDto[]> {
    return this.answerRepository.find({
      relations: ['challenge'],
      where: { challenge: id },
    });
  }

  findOne(id: number): Promise<CreateAnswerDto> {
    return this.answerRepository.findOne(id, { relations: ['challenge'] });
  }

  update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return this.answerRepository.update(id, updateAnswerDto);
  }

  async remove(id: number): Promise<void> {
    await this.answerRepository.delete(id);
  }
}
