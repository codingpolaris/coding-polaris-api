import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChallengesService } from 'src/challenges/challenges.service';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(
    private readonly answersService: AnswersService,
    private readonly challengesService: ChallengesService,
  ) {}

  @Post()
  async create(
    @Body() createAnswerDto: CreateAnswerDto,
    @Param('id') id: string,
  ) {
    createAnswerDto.challenge = await this.challengesService.findOne(+id);
    return this.answersService.create(createAnswerDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.answersService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(+id, updateAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
