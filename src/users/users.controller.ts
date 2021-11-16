import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CharactersService } from 'src/characters/characters.service';
import { User } from './entities/user.entity';
import Mail from "../mail/mail";

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
  async passwordReset(@Body() email: string) {
    try {
      const user = await this.usersService.findUsername(email);
      console.log("console do luiz try", user)
      if (user) {
        const password = user.username + Math.floor(Math.random() * (10 + 1));
        console.log("console do luiz if")
        return password
      }
    } catch (err) {
      console.log("console do luiz catch")
      return "erro"
    }
  }
}
