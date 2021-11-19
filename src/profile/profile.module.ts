import { Module } from '@nestjs/common';
import { AchievementsModule } from 'src/achievements/achievements.module';
import { ChallengesModule } from 'src/challenges/challenges.module';
import { CharactersChallengesModule } from 'src/characters-challenges/characters-challenges.module';
import { CharactersModule } from 'src/characters/characters.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './services/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [
    CharactersModule,
    AchievementsModule,
    ChallengesModule,
    CharactersChallengesModule,
  ],
})
export class ProfileModule {}
