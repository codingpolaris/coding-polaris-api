import { Character } from 'src/characters/entities/character.entity';
import { Content } from 'src/contents/entities/content.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;

  @Column()
  answer: string;

  @ManyToOne(() => Content)
  @JoinColumn()
  content: Content;

  @ManyToMany(() => Character, (character) => character.theme)
  character: Character[];
}
