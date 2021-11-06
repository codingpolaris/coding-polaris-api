import { Character } from 'src/characters/entities/character.entity';
import { Path } from 'src/paths/entities/path.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;
  @ManyToMany(() => Path, (path) => path.theme)
  path: Path[];

  @ManyToMany(() => Character, (character) => character.theme)
  character: Character[];
}
