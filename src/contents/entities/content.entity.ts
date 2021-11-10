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

  @Column({ unique: true })
  title: string;

  @Column({ unique: true })
  text: string;

  @Column()
  type: string;

  @ManyToOne(() => Theme)
  @JoinColumn()
  theme: Theme;
}
