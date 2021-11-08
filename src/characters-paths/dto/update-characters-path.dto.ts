import { PartialType } from '@nestjs/mapped-types';
import { CreateCharactersPathDto } from './create-characters-path.dto';

export class UpdateCharactersPathDto extends PartialType(CreateCharactersPathDto) {}
