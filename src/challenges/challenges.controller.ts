import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersChallengesService } from 'src/characters-challenges/services/characters-challenges.service';
import { ContentsService } from 'src/contents/contents.service';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(
    private readonly challengesService: ChallengesService,
    private readonly contentsService: ContentsService,
    private readonly charactersChallengesService: CharactersChallengesService,
  ) {}

  @Post(':id')
  async create(
    @Body() createChallengeDto: CreateChallengeDto,
    @Param('id') id: string,
  ) {
    createChallengeDto.content = await this.contentsService.findOne(+id);
    return this.challengesService.create(createChallengeDto);
  }

  @Get(':themeId/:characterId')
  async find(
    @Param('themeId') themeId: string,
    @Param('characterId') characterId: string,
  ) {
    const challengers = await this.challengesService.find(themeId);
    const history = await this.charactersChallengesService.findComplete(
      characterId,
    );
    if (history.length > 0) {
      const questions = [];
      history.forEach((register) => {
        challengers.forEach((question) => {
          if (question.id !== register.challenge.id) {
            questions.push(question);
          }
        });
      });
      return questions;
    } else {
      return challengers;
    }
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChallengeDto: UpdateChallengeDto,
  ) {
    return this.challengesService.update(+id, updateChallengeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.challengesService.remove(+id);
  }
}
