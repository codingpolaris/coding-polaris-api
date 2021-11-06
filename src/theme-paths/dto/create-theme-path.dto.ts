import { Path } from 'src/paths/entities/path.entity';
import { Theme } from 'src/themes/entities/theme.entity';

export class CreateThemePathDto {
  theme: Theme;

  path: Path;
}
