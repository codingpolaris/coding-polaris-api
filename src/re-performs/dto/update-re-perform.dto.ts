import { PartialType } from '@nestjs/mapped-types';
import { CreateRePerformDto } from './create-re-perform.dto';

export class UpdateRePerformDto extends PartialType(CreateRePerformDto) {}
