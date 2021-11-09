import { Character } from 'src/characters/entities/character.entity';
import { Theme } from 'src/themes/entities/theme.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;

  @ManyToMany(() => Theme, (theme) => theme.path)
  theme: Theme[];

  @ManyToMany(() => Character, (character) => character.path)
  character: Character[];
}
