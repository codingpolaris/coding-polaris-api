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

  @ManyToMany((type) => Path, {
    cascade: true,
  })
  @JoinTable({
    name: 'theme_path',
    joinColumn: { name: 'pathId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'themeId' },
  })
  path: Path[];
}
