import { Theme } from 'src/themes/entities/theme.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;

  @ManyToMany((type) => Theme, (theme) => theme.path)
  theme: Theme[];
}
