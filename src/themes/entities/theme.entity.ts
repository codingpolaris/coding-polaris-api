import { Path } from 'src/paths/entities/path.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Theme {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;
  @ManyToMany((type) => Path, (path) => path.theme)
  path: Path[];
}
