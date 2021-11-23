import { Module } from '@nestjs/common';
import { CharactersThemesService } from './services/characters-themes.service';
import { CharactersThemesController } from './characters-themes.controller';
import { CharactersModule } from 'src/characters/characters.module';
import { CharactersTheme } from './entities/characters-theme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemesModule } from 'src/themes/themes.module';
import { ThemePathsModule } from 'src/theme-paths/theme-paths.module';
import { CharactersPathsModule } from 'src/characters-paths/characters-paths.module';

@Module({
  controllers: [CharactersThemesController],
  providers: [CharactersThemesService],
  imports: [
    TypeOrmModule.forFeature([CharactersTheme]),
    ThemesModule,
    CharactersModule,
    ThemePathsModule,
    CharactersPathsModule,
  ],
  exports: [TypeOrmModule, CharactersThemesService],
})
export class CharactersThemesModule {}
