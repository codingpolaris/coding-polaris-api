import { Achievement } from 'src/achievements/entities/achievement.entity';
import { CharactersChallenge } from 'src/characters-challenges/entities/characters-challenge.entity';
import { Character } from 'src/characters/entities/character.entity';

export class Profile {
  constructor(
    character: Character,
    achievements: Achievement[],
    characterChallenge: CharactersChallenge,
  ) {
    this.username = character.user.username;
    this.email = character.user.email;
    this.full_name = character.user.full_name;
    this.gender = character.user.gender;
    this.class = characterChallenge.class;
    this.achievement = achievements;
  }
  username: string;

  email: string;

  full_name: string;

  gender: string;

  class: string;

  achievement: Achievement[];
}
