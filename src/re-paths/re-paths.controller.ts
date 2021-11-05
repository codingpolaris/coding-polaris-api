import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RePathsService } from './re-paths.service';
import { CreateRePathDto } from './dto/create-re-path.dto';
import { UpdateRePathDto } from './dto/update-re-path.dto';

@Controller('re-paths')
export class RePathsController {
  constructor(private readonly rePathsService: RePathsService) {}

  @Post()
  create(@Body() createRePathDto: CreateRePathDto) {
    return this.rePathsService.create(createRePathDto);
  }

  @Get()
  findAll() {
    return this.rePathsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rePathsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRePathDto: UpdateRePathDto) {
    return this.rePathsService.update(+id, updateRePathDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rePathsService.remove(+id);
  }
}
