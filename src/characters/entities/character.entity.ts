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

  @Column()
  knowledge: number;

  @Column()
  vitality: number;

  @Column({ default: 0 })
  level: number;

  @Column()
  experience: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Theme, (theme) => theme.character)
  theme: Theme[];
}
