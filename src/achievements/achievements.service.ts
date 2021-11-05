import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement } from './entities/achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementRepository: Repository<Achievement>,
  ) {}
  create(createAchievementDto: CreateAchievementDto) {
    return this.achievementRepository.save(createAchievementDto);
  }

  findAll(): Promise<Achievement[]> {
    return this.achievementRepository.find();
  }

  findOne(id: number): Promise<Achievement> {
    return this.achievementRepository.findOne(id);
  }

  update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return this.achievementRepository.update(id, updateAchievementDto);
  }

  async remove(id: number): Promise<void> {
    await this.achievementRepository.delete(id);
  }
}
