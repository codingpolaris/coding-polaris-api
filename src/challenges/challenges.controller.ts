import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContentsService } from 'src/contents/contents.service';
import { ChallengesService } from './challenges.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';

@Controller('challenges')
export class ChallengesController {
  constructor(
    private readonly challengesService: ChallengesService,
    private readonly contentsService: ContentsService,
  ) {}

  @Post(':id')
  async create(
    @Body() createChallengeDto: CreateChallengeDto,
    @Param('id') id: string,
  ) {
    createChallengeDto.content = await this.contentsService.findOne(+id);
    return this.challengesService.create(createChallengeDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.challengesService.find(id);
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
