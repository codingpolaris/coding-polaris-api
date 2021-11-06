import { PartialType } from '@nestjs/mapped-types';
import { CreateCharactersThemeDto } from './create-characters-theme.dto';

export class UpdateCharactersThemeDto extends PartialType(CreateCharactersThemeDto) {}
