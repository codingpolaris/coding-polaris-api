import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharactersChallenge } from 'src/characters-challenges/entities/characters-challenge.entity';
import { CharactersChallengesService } from 'src/characters-challenges/services/characters-challenges.service';
import { Repository } from 'typeorm';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
    private readonly charactersChallengesService: CharactersChallengesService,
  ) {}

  create(createChallengeDto: CreateChallengeDto) {
    return this.challengeRepository.save(createChallengeDto);
  }

  find(id: string) {
    return this.challengeRepository.find({
      relations: ['content'],
      where: { content: { theme: id } },
    });
  }

  findOne(id: number) {
    return this.challengeRepository.findOne(id);
  }

  update(id: number, updateChallengeDto: UpdateChallengeDto) {
    return this.challengeRepository.update(id, updateChallengeDto);
  }

  async remove(id: number): Promise<void> {
    await this.challengeRepository.delete(id);
  }

  async findIncomplete(themeId: string, characterId: string) {
    const challengers = await this.find(themeId);
    const characterChallengers =
      await this.charactersChallengesService.findComplete(characterId);
    if (characterChallengers.length > 0) {
      const questions = [] as Challenge[];
      const completed = [] as Challenge[];
      characterChallengers.forEach((register) => {
        const obj = {} as Challenge;
        obj.id = register.challenge.id;
        obj.name = register.challenge.name;
        obj.level = register.challenge.level;
        obj.minLevel = register.challenge.minLevel;
        completed.push(obj);
      });
      challengers.forEach((question) => {
        const obj = {} as Challenge;
        obj.id = question.id;
        obj.name = question.name;
        obj.level = question.level;
        obj.minLevel = question.minLevel;
        questions.push(obj);
      });
      const results = questions.filter(
        ({ id: id1 }) => !completed.some(({ id: id2 }) => id2 === id1),
      );
      return results;
    } else {
      return challengers;
    }
  }
}
