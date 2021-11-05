import { User } from 'src/users/entities/user.entity';

export class CreateCharacterDto {
  id: number;

  knowledge: number;

  vitality: number;

  level: number;

  experience: number;

  user: User;
}
