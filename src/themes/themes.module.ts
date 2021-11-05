import { Module } from '@nestjs/common';
import { ThemesService } from './themes.service';
import { ThemesController } from './themes.controller';
import { Theme } from './entities/theme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ThemesController],
  providers: [ThemesService],
  imports: [TypeOrmModule.forFeature([Theme])],
  exports: [TypeOrmModule, ThemesService],
})
export class ThemesModule {}
