import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  findAll() {
    return this.challengeRepository.find();
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
