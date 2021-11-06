import { PartialType } from '@nestjs/mapped-types';
import { CreateThemePathDto } from './create-theme-path.dto';

export class UpdateThemePathDto extends PartialType(CreateThemePathDto) {}
