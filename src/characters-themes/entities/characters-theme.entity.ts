import { Character } from 'src/characters/entities/character.entity';
import { Theme } from 'src/themes/entities/theme.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('re_character_theme')
export class CharactersTheme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isCompleted: boolean;

  @ManyToOne(() => Character, (character) => character.theme, { primary: true })
  character: Character;

  @ManyToOne(() => Theme, (theme) => theme.character, { primary: true })
  theme: Theme;
}
