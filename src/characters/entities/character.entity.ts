import { Challenge } from 'src/challenges/entities/challenge.entity';
import { Path } from 'src/paths/entities/path.entity';
import { Theme } from 'src/themes/entities/theme.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
@Entity()
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  knowledge: number;

  @Column({ default: 5 })
  vitality: number;

  @Column({ default: 0 })
  level: number;

  @Column({ default: 0 })
  experience: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Theme, (theme) => theme.character)
  theme: Theme[];

  @ManyToMany(() => Challenge, (challenge) => challenge.character)
  challenge: Challenge[];

  @ManyToMany(() => Path, (path) => path.character)
  path: Path[];
}
