import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReParticipatesService } from './re-participates.service';
import { CreateReParticipateDto } from './dto/create-re-participate.dto';
import { UpdateReParticipateDto } from './dto/update-re-participate.dto';

@Controller('re-participates')
export class ReParticipatesController {
  constructor(private readonly reParticipatesService: ReParticipatesService) {}

  @Post()
  create(@Body() createReParticipateDto: CreateReParticipateDto) {
    return this.reParticipatesService.create(createReParticipateDto);
  }

  @Get()
  findAll() {
    return this.reParticipatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reParticipatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReParticipateDto: UpdateReParticipateDto) {
    return this.reParticipatesService.update(+id, updateReParticipateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reParticipatesService.remove(+id);
  }
}
