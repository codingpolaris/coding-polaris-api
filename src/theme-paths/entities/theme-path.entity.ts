import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Path } from 'src/paths/entities/path.entity';
import { Theme } from 'src/themes/entities/theme.entity';
@Entity()
export class ThemePath {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Theme, (theme) => theme.path, { primary: true })
  theme: Theme;

  @ManyToOne(() => Path, (path) => path.theme, { primary: true })
  path: Path;
}
