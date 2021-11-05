import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  knowledge: number;

  @Column()
  vitality: number;

  @Column()
  experience: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
