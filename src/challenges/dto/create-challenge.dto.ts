import { Content } from 'src/contents/entities/content.entity';

export class CreateChallengeDto {
  id: number;

  pass_condition: number;

  name: string;

  level: number;

  acess: number;

  answer: string;

  content: Content;
}
