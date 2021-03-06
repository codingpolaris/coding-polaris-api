import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { CharactersModule } from './characters/characters.module';
import { AchievementsModule } from './achievements/achievements.module';
import { PathsModule } from './paths/paths.module';
import { ChallengesModule } from './challenges/challenges.module';
import { ContentsModule } from './contents/contents.module';
import { ThemesModule } from './themes/themes.module';
import { ThemePathsModule } from './theme-paths/theme-paths.module';
import { CharactersThemesModule } from './characters-themes/characters-themes.module';
import { CharactersChallengesModule } from './characters-challenges/characters-challenges.module';
import { CharactersPathsModule } from './characters-paths/characters-paths.module';
import { AnswersModule } from './answers/answers.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    CharactersModule,
    AchievementsModule,
    PathsModule,
    ChallengesModule,
    ContentsModule,
    ThemesModule,
    ThemePathsModule,
    CharactersThemesModule,
    CharactersChallengesModule,
    CharactersPathsModule,
    AnswersModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
