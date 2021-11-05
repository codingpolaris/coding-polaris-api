import { PartialType } from '@nestjs/mapped-types';
import { CreateReParticipateDto } from './create-re-participate.dto';

export class UpdateReParticipateDto extends PartialType(CreateReParticipateDto) {}
