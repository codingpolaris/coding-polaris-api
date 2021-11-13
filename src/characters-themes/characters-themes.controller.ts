import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersThemesService } from './services/characters-themes.service';
import { CreateCharactersThemeDto } from './dto/create-characters-theme.dto';
import { UpdateCharactersThemeDto } from './dto/update-characters-theme.dto';
import { ThemesService } from 'src/themes/themes.service';
import { CharactersService } from 'src/characters/characters.service';
import { RequestCharactersThemes } from './services/requests/characters-themes.request';

@Controller('characters-themes')
export class CharactersThemesController {
  constructor(
    private readonly charactersThemesService: CharactersThemesService,
    private readonly themesService: ThemesService,
    private readonly charactersServiceService: CharactersService,
  ) {}

  @Post()
  async create(@Body() requestCharactersThemes: RequestCharactersThemes) {
    const createCharactersThemeDto = new CreateCharactersThemeDto();
    createCharactersThemeDto.theme = await this.themesService.findOne(
      +requestCharactersThemes.themeId,
    );
    createCharactersThemeDto.character =
      await this.charactersServiceService.find(
        +requestCharactersThemes.characterId,
      );

    return this.charactersThemesService.create(createCharactersThemeDto);
  }

  @Get()
  findAll() {
    return this.charactersThemesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charactersThemesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharactersThemeDto: UpdateCharactersThemeDto,
  ) {
    return this.charactersThemesService.update(+id, updateCharactersThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersThemesService.remove(+id);
  }
}
