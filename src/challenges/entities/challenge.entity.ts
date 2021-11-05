import { Content } from 'src/contents/entities/content.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  pass_condition: number;

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
}
