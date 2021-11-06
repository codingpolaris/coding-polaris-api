import { Module } from '@nestjs/common';
import { ThemePathsService } from './services/theme-paths.service';
import { ThemePathsController } from './theme-paths.controller';
import { ThemesModule } from 'src/themes/themes.module';
import { PathsModule } from 'src/paths/paths.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemePath } from './entities/theme-path.entity';

@Module({
  controllers: [ThemePathsController],
  providers: [ThemePathsService],
  imports: [TypeOrmModule.forFeature([ThemePath]), ThemesModule, PathsModule],
  exports: [TypeOrmModule, ThemePathsService],
})
export class ThemePathsModule {}
