import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharactersPathsService } from './characters-paths.service';
import { CreateCharactersPathDto } from './dto/create-characters-path.dto';
import { UpdateCharactersPathDto } from './dto/update-characters-path.dto';

@Controller('characters-paths')
export class CharactersPathsController {
  constructor(private readonly charactersPathsService: CharactersPathsService) {}

  @Post()
  create(@Body() createCharactersPathDto: CreateCharactersPathDto) {
    return this.charactersPathsService.create(createCharactersPathDto);
  }

  @Get()
  findAll() {
    return this.charactersPathsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charactersPathsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharactersPathDto: UpdateCharactersPathDto) {
    return this.charactersPathsService.update(+id, updateCharactersPathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersPathsService.remove(+id);
  }
}
