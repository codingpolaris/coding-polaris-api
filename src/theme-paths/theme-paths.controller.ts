import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ThemePathsService } from './services/theme-paths.service';
import { CreateThemePathDto } from './dto/create-theme-path.dto';
import { UpdateThemePathDto } from './dto/update-theme-path.dto';
import { RequestThemePath } from './services/requests/theme-path.request';
import { PathsService } from 'src/paths/paths.service';
import { ThemesService } from 'src/themes/themes.service';

@Controller('theme-paths')
export class ThemePathsController {
  constructor(
    private readonly themePathsService: ThemePathsService,
    private readonly themesService: ThemesService,
    private readonly pathService: PathsService,
  ) {}

  @Post()
  async create(@Body() requestThemePath: RequestThemePath) {
    const createThemePathDto = new CreateThemePathDto();
    createThemePathDto.theme = await this.themesService.findOne(
      +requestThemePath.themeId,
    );
    createThemePathDto.path = await this.pathService.findOne(
      +requestThemePath.pathId,
    );

    return this.themePathsService.create(createThemePathDto);
  }

  @Get()
  findAll() {
    return this.themePathsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themePathsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateThemePathDto: UpdateThemePathDto,
  ) {
    return this.themePathsService.update(+id, updateThemePathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themePathsService.remove(+id);
  }
}
