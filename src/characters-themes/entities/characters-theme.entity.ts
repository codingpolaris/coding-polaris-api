import { Character } from 'src/characters/entities/character.entity';
import { Theme } from 'src/themes/entities/theme.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('re_character_theme')
export class CharactersTheme {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Character, (character) => character.theme, { primary: true })
  character: Character;

  @ManyToOne(() => Theme, (theme) => theme.character, { primary: true })
  theme: Theme;
}
