import { Module } from '@nestjs/common';
import { CharactersPathsService } from './characters-paths.service';
import { CharactersPathsController } from './characters-paths.controller';

@Module({
  controllers: [CharactersPathsController],
  providers: [CharactersPathsService]
})
export class CharactersPathsModule {}
