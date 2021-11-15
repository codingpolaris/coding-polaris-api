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

  findComplete(id: string) {
    return this.charactersChallengeRepository
      .createQueryBuilder('re_character_challenge')
      .leftJoinAndSelect('re_character_challenge.character', 'character')
      .leftJoinAndSelect('re_character_challenge.challenge', 'challenge')
      .leftJoinAndSelect('re_character_challenge.achievement', 'achievement')
      .where('re_character_challenge.accepts= :accept', { accept: 1 })
      .andWhere('re_character_challenge.characterId= :id', { id: id })
      .distinctOn([
        're_character_challenge.characterId',
        'challenge.id',
        'achievement.id',
      ])
      .getMany();
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
