import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentsService } from 'src/contents/contents.service';
import { Repository } from 'typeorm';
import { CreateChallengeDto } from './dto/create-challenge.dto';
import { UpdateChallengeDto } from './dto/update-challenge.dto';
import { Challenge } from './entities/challenge.entity';

@Injectable()
export class ChallengesService {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  create(createChallengeDto: CreateChallengeDto) {
    return this.challengeRepository.save(createChallengeDto);
  }

  find(id: string) {
    ContentsService;
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
}
