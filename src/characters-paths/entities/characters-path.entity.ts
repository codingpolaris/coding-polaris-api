import { Character } from 'src/characters/entities/character.entity';
import { Path } from 'src/paths/entities/path.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('re_character_path')
export class CharactersPath {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isCompleted: boolean;

  @ManyToOne(() => Character, (character) => character.theme, { primary: true })
  character: Character;

  @ManyToOne(() => Path, (path) => path.character, { primary: true })
  path: Path;
}
