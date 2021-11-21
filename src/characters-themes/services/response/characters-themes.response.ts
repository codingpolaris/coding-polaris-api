import { CharactersTheme } from 'src/characters-themes/entities/characters-theme.entity';
import { Theme } from 'src/themes/entities/theme.entity';

export class ResponseCharactersThemes extends Theme {
  constructor(characterTheme: CharactersTheme) {
    super();
    this.id = characterTheme.id;
    this.themeId = characterTheme.theme.id;
    this.name = characterTheme.theme.name;
    this.level = characterTheme.theme.level;
    this.acess = characterTheme.theme.acess;
    this.isCompleted = characterTheme.isCompleted;
  }
  themeId: number;
  isCompleted: boolean;
}
