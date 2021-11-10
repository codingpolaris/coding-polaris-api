import { Challenge } from 'src/challenges/entities/challenge.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  text: string;

  @Column()
  type: string;

  @ManyToOne(() => Challenge)
  @JoinColumn()
  challenge: Challenge;
}
