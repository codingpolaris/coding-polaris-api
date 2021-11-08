import { Injectable } from '@nestjs/common';
import { CreateCharactersPathDto } from './dto/create-characters-path.dto';
import { UpdateCharactersPathDto } from './dto/update-characters-path.dto';

@Injectable()
export class CharactersPathsService {
  create(createCharactersPathDto: CreateCharactersPathDto) {
    return 'This action adds a new charactersPath';
  }

  findAll() {
    return `This action returns all charactersPaths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charactersPath`;
  }

  update(id: number, updateCharactersPathDto: UpdateCharactersPathDto) {
    return `This action updates a #${id} charactersPath`;
  }

  remove(id: number) {
    return `This action removes a #${id} charactersPath`;
  }
}
