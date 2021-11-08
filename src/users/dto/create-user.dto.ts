export class CreateUserDto {
  id: number;

  username: string;

  password: string;

  email: string;

  full_name: string;

  achievements_id: number;

  gender: string;

  created_at: Date;
}
