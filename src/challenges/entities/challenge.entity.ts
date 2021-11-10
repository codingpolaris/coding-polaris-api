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

  @Column({ unique: true })
  name: string;

  @Column()
  level: number;

  @Column({ default: 0 })
  minLevel: number;

  @ManyToOne(() => Content)
  @JoinColumn()
  content: Content;

  @ManyToMany(() => Character, (character) => character.theme)
  character: Character[];
}
