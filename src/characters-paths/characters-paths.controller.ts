import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersService } from 'src/characters/characters.service';
import { PathsService } from 'src/paths/paths.service';
import { CharactersPathsService } from './services/characters-paths.service';
import { CreateCharactersPathDto } from './dto/create-characters-path.dto';
import { UpdateCharactersPathDto } from './dto/update-characters-path.dto';
import { RequestCharactersPaths } from './services/requests/characters-path.request';

@Controller('characters-paths')
export class CharactersPathsController {
  constructor(
    private readonly charactersPathsService: CharactersPathsService,
    private readonly pathsService: PathsService,
    private readonly charactersServiceService: CharactersService,
  ) {}

  @Post()
  async create(@Body() requestCharactersPaths: RequestCharactersPaths) {
    const createCharactersPathDto = new CreateCharactersPathDto();
    createCharactersPathDto.path = await this.pathsService.findOne(
      +requestCharactersPaths.pathId,
    );
    createCharactersPathDto.character =
      await this.charactersServiceService.find(
        +requestCharactersPaths.characterId,
      );

    return this.charactersPathsService.create(createCharactersPathDto);
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.charactersPathsService.find(id);
  }

  findOne(@Param('id') id: string) {
    return this.charactersPathsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharactersPathDto: UpdateCharactersPathDto,
  ) {
    return this.charactersPathsService.update(+id, updateCharactersPathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersPathsService.remove(+id);
  }
}
