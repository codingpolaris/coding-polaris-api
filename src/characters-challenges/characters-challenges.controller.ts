import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersChallengesService } from './services/characters-challenges.service';
import { RequestCharacterChallenge } from './services/requests/characters-challenge.request';
import { RequestUpdateCharacterChallenge } from './services/requests/update-characters-challenge.request';

@Controller('characters-challenges')
export class CharactersChallengesController {
  constructor(
    private readonly charactersChallengesService: CharactersChallengesService,
  ) {}

  @Post()
  async create(@Body() requestCharacterChallenge: RequestCharacterChallenge) {
    return await this.charactersChallengesService.create(
      requestCharacterChallenge,
    );
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.charactersChallengesService.findComplete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() requestUpdateCharacterChallenge: RequestUpdateCharacterChallenge,
  ) {
    return this.charactersChallengesService.update(
      id,
      requestUpdateCharacterChallenge,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersChallengesService.remove(+id);
  }
}
