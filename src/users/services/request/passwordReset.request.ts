export class PasswordResetRequest {
  password?: string;

  newPassword?: string;

  email?: string;

  isRecover: boolean;

  characterId?: number;
}
