import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AchievementsService } from '../../achievements/achievements.service';
import { ChallengesService } from '../../challenges/challenges.service';
import { CharactersService } from '../../characters/characters.service';
import { Repository } from 'typeorm';
import { CreateCharactersChallengeDto } from '../dto/create-characters-challenge.dto';
import { UpdateCharactersChallengeDto } from '../dto/update-characters-challenge.dto';
import { CharactersChallenge } from '../entities/characters-challenge.entity';
import { RequestUpdateCharacterChallenge } from './requests/update-characters-challenge.request';
import { RequestCharacterChallenge } from './requests/characters-challenge.request';

@Injectable()
export class CharactersChallengesService {
  constructor(
    @InjectRepository(CharactersChallenge)
    private charactersChallengeRepository: Repository<CharactersChallenge>,
    private readonly charactersService: CharactersService,
    @Inject(forwardRef(() => ChallengesService))
    private readonly challengesService: ChallengesService,
    @Inject(forwardRef(() => AchievementsService))
    private readonly achievementsService: AchievementsService,
  ) {}
  async create(requestCharacterChallenge: RequestCharacterChallenge) {
    const createCharactersChallengeDto = new CreateCharactersChallengeDto();
    createCharactersChallengeDto.character =
      await this.charactersService.findOne(
        +requestCharacterChallenge.characterId,
      );
    createCharactersChallengeDto.challenge =
      await this.challengesService.findOne(
        +requestCharacterChallenge.ChallengeId,
      );
    createCharactersChallengeDto.achievement =
      await this.achievementsService.findOne(
        +requestCharacterChallenge.achievementId,
      );
    createCharactersChallengeDto.class = requestCharacterChallenge.class;
    createCharactersChallengeDto.level =
      createCharactersChallengeDto.challenge.level;
    return this.charactersChallengeRepository.save(
      createCharactersChallengeDto,
    );
  }

  getMoreRecent(id: string) {
    return this.charactersChallengeRepository.findOne({
      relations: ['character', 'challenge', 'achievement'],
      where: { character: id },
      order: { id: 'DESC' },
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

  async update(
    id: number,
    requestUpdateCharacterChallenge: RequestUpdateCharacterChallenge,
  ) {
    const createCharactersChallengeDto = new CreateCharactersChallengeDto();
    const updateCharactersChallengeDto = new UpdateCharactersChallengeDto();
    createCharactersChallengeDto.id = id;
    createCharactersChallengeDto.character =
      await this.charactersService.findOne(
        +requestUpdateCharacterChallenge.characterId,
      );
    createCharactersChallengeDto.challenge =
      await this.challengesService.findOne(
        +requestUpdateCharacterChallenge.ChallengeId,
      );
    createCharactersChallengeDto.achievement =
      await this.achievementsService.findOne(
        +requestUpdateCharacterChallenge.achievementId,
      );
    updateCharactersChallengeDto.end_date = new Date();
    if (requestUpdateCharacterChallenge.accepts) {
      updateCharactersChallengeDto.accepts =
        requestUpdateCharacterChallenge?.accepts;
    }
    if (requestUpdateCharacterChallenge.fails) {
      updateCharactersChallengeDto.fails =
        requestUpdateCharacterChallenge?.fails;
    }
    return this.charactersChallengeRepository.update(
      createCharactersChallengeDto,
      updateCharactersChallengeDto,
    );
  }

  async remove(id: number): Promise<void> {
    await this.charactersChallengeRepository.delete(id);
  }
}
