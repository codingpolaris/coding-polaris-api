import { Injectable } from '@nestjs/common';
import { AchievementsService } from 'src/achievements/achievements.service';
import { CharactersChallengesService } from 'src/characters-challenges/services/characters-challenges.service';
import { CharactersService } from 'src/characters/characters.service';
import { Profile } from './response/profile.response';

@Injectable()
export class ProfileService {
  constructor(
    private readonly charactersService: CharactersService,
    private readonly charactersChallengesService: CharactersChallengesService,
    private readonly achievementsService: AchievementsService,
  ) {}

  async findProfile(id: string) {
    const character = await this.charactersService.findOne(+id);
    const achievements = await this.achievementsService.getUserAchievements(id);
    const charactersChallenges =
      await this.charactersChallengesService.getMoreRecent(id);

    const profile = new Profile(character, achievements, charactersChallenges);
    return profile;
  }
}
