import { Challenge } from 'src/challenges/entities/challenge.entity';

export class CreateAnswerDto {
  id: number;

  text: string;

  type: string;

  challenge: Challenge;
}
