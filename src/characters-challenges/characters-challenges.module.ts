import { Module } from '@nestjs/common';
import { CharactersChallengesService } from './services/characters-challenges.service';
import { CharactersChallengesController } from './characters-challenges.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from 'src/characters/characters.module';
import { ChallengesModule } from 'src/challenges/challenges.module';
import { AchievementsModule } from 'src/achievements/achievements.module';
import { CharactersChallenge } from './entities/characters-challenge.entity';

@Module({
  controllers: [CharactersChallengesController],
  providers: [CharactersChallengesService],
  imports: [
    TypeOrmModule.forFeature([CharactersChallenge]),
    CharactersModule,
    ChallengesModule,
    AchievementsModule,
  ],
  exports: [TypeOrmModule, CharactersChallengesService],
})
export class CharactersChallengesModule {}
