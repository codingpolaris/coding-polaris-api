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
import { RequestCharactersThemes } from './services/requests/characters-themes.request';

@Controller('characters-themes')
export class CharactersThemesController {
  constructor(
    private readonly charactersThemesService: CharactersThemesService,
  ) {}

  @Post()
  async create(@Body() requestCharactersThemes: RequestCharactersThemes) {
    return this.charactersThemesService.create(requestCharactersThemes);
  }

  @Get(':characterId/:pathId')
  findOne(
    @Param('characterId') characterId: string,
    @Param('pathId') pathId: string,
  ) {
    return this.charactersThemesService.getThemeByPath(characterId, pathId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() requestCharactersThemes: RequestCharactersThemes,
  ) {
    return this.charactersThemesService.update(+id, requestCharactersThemes);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersThemesService.remove(+id);
  }
}
