import { Achievement } from 'src/achievements/entities/achievement.entity';
import { Challenge } from 'src/challenges/entities/challenge.entity';
import { Character } from 'src/characters/entities/character.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('re_character_challenge')
export class CharactersChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class: string;

  @Column()
  level: number;

  @Column({ default: 0 })
  accepts: number;

  @Column({ default: 0 })
  fails: number;

  @Column({ default: new Date().toLocaleDateString() })
  start_date: Date;

  @Column({ default: new Date().toLocaleDateString() })
  end_date: Date;

  @ManyToOne(() => Achievement)
  @JoinColumn()
  achievement: Achievement;

  @ManyToOne(() => Character, (character) => character.challenge, {
    primary: true,
  })
  character: Character;

  @ManyToOne(() => Challenge, (challenge) => challenge.character, {
    primary: true,
  })
  challenge: Challenge;
}
