import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { RePerformsModule } from './re-performs/re-performs.module';
import { AchievementsModule } from './achievements/achievements.module';
import { ReParticipatesModule } from './re-participates/re-participates.module';
import { PathsModule } from './paths/paths.module';
import { RePathsModule } from './re-paths/re-paths.module';
import { ChallengesModule } from './challenges/challenges.module';
import { ContentsModule } from './contents/contents.module';
import { ThemesModule } from './themes/themes.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, CharactersModule, RePerformsModule, AchievementsModule, ReParticipatesModule, PathsModule, RePathsModule, ChallengesModule, ContentsModule, ThemesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
