import { PartialType } from '@nestjs/mapped-types';
import { CreateRePathDto } from './create-re-path.dto';

export class UpdateRePathDto extends PartialType(CreateRePathDto) {}
