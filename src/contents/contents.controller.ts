import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ThemesService } from 'src/themes/themes.service';
import { ContentsService } from './contents.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('contents')
export class ContentsController {
  constructor(
    private readonly contentsService: ContentsService,
    private readonly themesService: ThemesService,
  ) {}

  @Post(':id')
  async create(
    @Body() createContentDto: CreateContentDto,
    @Param('id') themeId: string,
  ) {
    createContentDto.theme = await this.themesService.findOne(+themeId);
    return this.contentsService.create(createContentDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.contentsService.find(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentsService.update(+id, updateContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentsService.remove(+id);
  }
}
