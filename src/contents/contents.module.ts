import { Module } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { ContentsController } from './contents.controller';
import { Content } from './entities/content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemesModule } from 'src/themes/themes.module';

@Module({
  controllers: [ContentsController],
  providers: [ContentsService],
  imports: [TypeOrmModule.forFeature([Content]), ThemesModule],
  exports: [TypeOrmModule, ContentsService],
})
export class ContentsModule {}
