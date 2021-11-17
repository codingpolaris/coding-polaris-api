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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('passwordReset')
  async passwordReset(@Body() userPassword: PasswordResetRequest) {
    try {
      const user = await this.usersService.findEmail(userPassword.email);
      if (user) {
        return this.usersService.updatePassword(user, true);
      }
    } catch (err) {
      return err;
    }
  }
}
