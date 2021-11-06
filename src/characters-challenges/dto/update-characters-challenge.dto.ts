import { PartialType } from '@nestjs/mapped-types';
import { CreateCharactersChallengeDto } from './create-characters-challenge.dto';

export class UpdateCharactersChallengeDto extends PartialType(
  CreateCharactersChallengeDto,
) {}
