import { Theme } from 'src/themes/entities/theme.entity';

export class CreateContentDto {
  id: number;

  title: string;

  text: string;

  type: string;

  theme: Theme;
}
