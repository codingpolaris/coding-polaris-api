import { Module } from '@nestjs/common';
import { CharactersPathsService } from './services/characters-paths.service';
import { CharactersPathsController } from './characters-paths.controller';
import { CharactersPath } from './entities/characters-path.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from 'src/characters/characters.module';
import { PathsModule } from 'src/paths/paths.module';

@Module({
  controllers: [CharactersPathsController],
  providers: [CharactersPathsService],
  imports: [
    TypeOrmModule.forFeature([CharactersPath]),
    PathsModule,
    CharactersModule,
  ],
  exports: [TypeOrmModule, CharactersPathsService],
})
export class CharactersPathsModule {}
