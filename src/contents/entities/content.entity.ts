import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Theme } from 'src/themes/entities/theme.entity';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  type: string;

  @ManyToOne(() => Theme)
  @JoinColumn()
  theme: Theme;
}
