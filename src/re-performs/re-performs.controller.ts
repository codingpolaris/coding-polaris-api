import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RePerformsService } from './re-performs.service';
import { CreateRePerformDto } from './dto/create-re-perform.dto';
import { UpdateRePerformDto } from './dto/update-re-perform.dto';

@Controller('re-performs')
export class RePerformsController {
  constructor(private readonly rePerformsService: RePerformsService) {}

  @Post()
  create(@Body() createRePerformDto: CreateRePerformDto) {
    return this.rePerformsService.create(createRePerformDto);
  }

  @Get()
  findAll() {
    return this.rePerformsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rePerformsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRePerformDto: UpdateRePerformDto) {
    return this.rePerformsService.update(+id, updateRePerformDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rePerformsService.remove(+id);
  }
}
