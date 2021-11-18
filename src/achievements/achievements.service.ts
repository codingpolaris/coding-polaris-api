import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengesService } from 'src/challenges/challenges.service';
import { CharactersChallengesService } from 'src/characters-challenges/services/characters-challenges.service';
import { CharactersPathsService } from 'src/characters-paths/services/characters-paths.service';
import { CharactersTheme } from 'src/characters-themes/entities/characters-theme.entity';
import { CharactersThemesService } from 'src/characters-themes/services/characters-themes.service';
import { Repository } from 'typeorm';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { Achievement } from './entities/achievement.entity';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectRepository(Achievement)
    private achievementRepository: Repository<Achievement>,
    private readonly charactersPathsService: CharactersPathsService,
    private readonly charactersThemesService: CharactersThemesService,
    private readonly challengesService: ChallengesService,
    private readonly charactersChallengesService: CharactersChallengesService,
  ) {}
  create(createAchievementDto: CreateAchievementDto) {
    return this.achievementRepository.save(createAchievementDto);
  }

  findAll(): Promise<Achievement[]> {
    return this.achievementRepository.find();
  }

  async findOne(id: number): Promise<Achievement> {
    return await this.achievementRepository.findOne(id);
  }

  update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return this.achievementRepository.update(id, updateAchievementDto);
  }

  async getUserAchievements(id: string) {
    const achievments = [];
    let idsAux = 0;
    let count = 0;
    const paths = await this.charactersPathsService.find(id);
    const themes = await this.charactersThemesService.find(id);
    const challengersCompleted =
      await this.charactersChallengesService.findComplete(id);
    challengersCompleted.forEach((history) => {
      const ids = history.achievement.id;
      if (ids != idsAux) {
        idsAux = ids;
        count = 1;
      } else {
        count = count + 1;
      }
      if (count === 5) {
        achievments.push(history.achievement);
      }
    });
    return achievments;
  }

  async remove(id: number): Promise<void> {
    await this.achievementRepository.delete(id);
  }
}
