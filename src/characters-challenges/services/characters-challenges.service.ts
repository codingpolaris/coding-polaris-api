import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharactersChallengeDto } from '../dto/create-characters-challenge.dto';
import { UpdateCharactersChallengeDto } from '../dto/update-characters-challenge.dto';
import { CharactersChallenge } from '../entities/characters-challenge.entity';

@Injectable()
export class CharactersChallengesService {
  constructor(
    @InjectRepository(CharactersChallenge)
    private charactersChallengeRepository: Repository<CharactersChallenge>,
  ) {}
  create(createCharactersChallengeDto: CreateCharactersChallengeDto) {
    return this.charactersChallengeRepository.save(
      createCharactersChallengeDto,
    );
  }

  findAll() {
    return this.charactersChallengeRepository.find({
      relations: ['character', 'challenge', 'achievement'],
    });
  }

  findOne(id: number) {
    return this.charactersChallengeRepository.findOne(id, {
      relations: ['character', 'challenge', 'achievement'],
    });
  }

  update(
    id: CreateCharactersChallengeDto,
    updateCharactersChallengeDto: UpdateCharactersChallengeDto,
  ) {
    return this.charactersChallengeRepository.update(
      id,
      updateCharactersChallengeDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.charactersChallengeRepository.delete(id);
  }
}
