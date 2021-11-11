import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { Character } from './entities/character.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CharactersController],
  providers: [CharactersService],
  imports: [TypeOrmModule.forFeature([Character])],
  exports: [TypeOrmModule, CharactersService],
})
export class CharactersModule {}
