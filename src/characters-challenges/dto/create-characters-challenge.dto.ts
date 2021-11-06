import { Achievement } from 'src/achievements/entities/achievement.entity';
import { Challenge } from 'src/challenges/entities/challenge.entity';
import { Character } from 'src/characters/entities/character.entity';

export class CreateCharactersChallengeDto {
  id: number;

  class: string;

  level: number;

  accepts: number;

  fails: number;

  start_date: Date;

  end_date: Date;

  achievement: Achievement;

  character: Character;

  challenge: Challenge;
}
