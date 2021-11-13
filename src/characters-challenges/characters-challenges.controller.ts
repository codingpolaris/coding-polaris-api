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
import { CreateCharactersChallengeDto } from './dto/create-characters-challenge.dto';
import { UpdateCharactersChallengeDto } from './dto/update-characters-challenge.dto';
import { RequestCharacterChallenge } from './services/requests/characters-challenge.request';
import { CharactersService } from 'src/characters/characters.service';
import { ChallengesService } from 'src/challenges/challenges.service';
import { AchievementsService } from 'src/achievements/achievements.service';

@Controller('characters-challenges')
export class CharactersChallengesController {
  constructor(
    private readonly charactersChallengesService: CharactersChallengesService,
    private readonly charactersService: CharactersService,
    private readonly challengesService: ChallengesService,
    private readonly achievementsService: AchievementsService,
  ) {}

  @Post()
  async create(@Body() requestCharacterChallenge: RequestCharacterChallenge) {
    const createCharactersChallengeDto = new CreateCharactersChallengeDto();
    createCharactersChallengeDto.character = await this.charactersService.find(
      +requestCharacterChallenge.characterId,
    );
    createCharactersChallengeDto.challenge =
      await this.challengesService.findOne(
        +requestCharacterChallenge.ChallengeId,
      );
    createCharactersChallengeDto.achievement =
      await this.achievementsService.findOne(
        +requestCharacterChallenge.achievementId,
      );
    createCharactersChallengeDto.class = requestCharacterChallenge.class;
    createCharactersChallengeDto.level =
      createCharactersChallengeDto.challenge.level;
    return this.charactersChallengesService.create(
      createCharactersChallengeDto,
    );
  }

  @Get()
  findAll() {
    return this.charactersChallengesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charactersChallengesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharactersChallengeDto: UpdateCharactersChallengeDto,
  ) {
    return this.charactersChallengesService.update(
      +id,
      updateCharactersChallengeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersChallengesService.remove(+id);
  }
}
