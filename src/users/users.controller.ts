import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CharactersService } from 'src/characters/characters.service';
import { PasswordResetRequest } from './services/request/passwordReset.request';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private charactersService: CharactersService,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return await this.charactersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Patch('gender/:id')
  chageGender(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.changeGender(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('passwordReset')
  async passwordReset(@Body() userPassword: PasswordResetRequest) {
    try {
      return this.usersService.updatePassword(userPassword);
    } catch (err) {
      return err;
    }
  }
}
