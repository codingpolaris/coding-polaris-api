import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { Achievement } from './entities/achievement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersPathsModule } from 'src/characters-paths/characters-paths.module';
import { CharactersThemesModule } from 'src/characters-themes/characters-themes.module';
import { ChallengesModule } from 'src/challenges/challenges.module';
import { CharactersChallengesModule } from 'src/characters-challenges/characters-challenges.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Achievement]),
    CharactersPathsModule,
    CharactersThemesModule,
    ChallengesModule,
    CharactersChallengesModule,
  ],
  controllers: [AchievementsController],
  providers: [AchievementsService],
  exports: [TypeOrmModule, AchievementsService],
})
export class AchievementsModule {}
