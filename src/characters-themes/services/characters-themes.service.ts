import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CharactersPathsService } from 'src/characters-paths/services/characters-paths.service';
import { CharactersService } from 'src/characters/characters.service';
import { ThemePathsService } from 'src/theme-paths/services/theme-paths.service';
import { ThemesService } from 'src/themes/themes.service';
import { Repository } from 'typeorm';
import { CreateCharactersThemeDto } from '../dto/create-characters-theme.dto';
import { UpdateCharactersThemeDto } from '../dto/update-characters-theme.dto';
import { CharactersTheme } from '../entities/characters-theme.entity';
import { RequestCharactersThemes } from './requests/characters-themes.request';
import { ResponseCharactersThemes } from './response/characters-themes.response';

@Injectable()
export class CharactersThemesService {
  constructor(
    @InjectRepository(CharactersTheme)
    private charactersThemeRepository: Repository<CharactersTheme>,
    private charactersService: CharactersService,
    private themePathsService: ThemePathsService,
    private themesService: ThemesService,
    private charactersPathsService: CharactersPathsService,
  ) {}
  async create(requestCharactersThemes: RequestCharactersThemes) {
    const createCharactersThemeDto = new CreateCharactersThemeDto();
    createCharactersThemeDto.theme = await this.themesService.findOne(
      +requestCharactersThemes.themeId,
    );
    createCharactersThemeDto.character = await this.charactersService.findOne(
      +requestCharactersThemes.characterId,
    );
    createCharactersThemeDto.isCompleted = requestCharactersThemes.isCompleted;
    return this.charactersThemeRepository.save(createCharactersThemeDto);
  }

  find(id: string) {
    return this.charactersThemeRepository.find({
      relations: ['theme', 'character'],
      where: { character: id },
    });
  }

  async getThemeByPath(characterId: string, pathId) {
    const characterThemes = await this.find(characterId);
    const themes = await this.themePathsService.find(pathId);
    const userThemes = [];
    themes.forEach((theme) => {
      characterThemes.forEach((characterTheme) => {
        if (theme.theme.id == characterTheme.theme.id) {
          const obj = new ResponseCharactersThemes(characterTheme);
          userThemes.push(obj);
        }
      });
    });
    return userThemes;
  }

  async update(id: number, requestCharactersThemes: RequestCharactersThemes) {
    const updateCharactersThemeDto = new UpdateCharactersThemeDto();
    const createCharactersThemeDto = new CreateCharactersThemeDto();
    createCharactersThemeDto.id = id;
    createCharactersThemeDto.character = await this.charactersService.findOne(
      +requestCharactersThemes.characterId,
    );
    createCharactersThemeDto.theme = await this.themesService.findOne(
      +requestCharactersThemes.themeId,
    );
    updateCharactersThemeDto.isCompleted = requestCharactersThemes.isCompleted;

    const log = await this.charactersThemeRepository.update(
      createCharactersThemeDto,
      updateCharactersThemeDto,
    );

    if (requestCharactersThemes.isCompleted) {
      return await this.isCompleted(
        requestCharactersThemes.characterId,
        requestCharactersThemes.themeId,
        requestCharactersThemes.pathId,
      );
    } else {
      return log;
    }
  }

  async isCompleted(characterId: number, themeId: number, pathId: number) {
    const themes = await this.getThemeByPath(
      characterId.toString(),
      pathId.toString(),
    );
    const last = themes.pop();
    if (last.themeId === themeId) {
      return await this.charactersPathsService.completeUpdate(
        pathId.toString(),
        characterId.toString(),
        true,
      );
    } else {
      return;
    }
  }

  async remove(id: number): Promise<void> {
    await this.charactersThemeRepository.delete(id);
  }
}
