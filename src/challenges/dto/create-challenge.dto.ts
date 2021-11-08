import { Content } from 'src/contents/entities/content.entity';

export class CreateChallengeDto {
  id: number;

  name: string;

  level: number;

  minLevel: number;

  content: Content;
}
