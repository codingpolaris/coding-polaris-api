import { Character } from 'src/characters/entities/character.entity';
import { Theme } from 'src/themes/entities/theme.entity';

export class CreateCharactersThemeDto {
  character: Character;

  theme: Theme;
}
