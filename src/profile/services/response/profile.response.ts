import { Achievement } from 'src/achievements/entities/achievement.entity';
import { CharactersChallenge } from 'src/characters-challenges/entities/characters-challenge.entity';
import { Character } from 'src/characters/entities/character.entity';
import { Class } from 'src/enums/class.enum';

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
    if (characterChallenge) {
      this.class = characterChallenge.class;
    } else {
      this.class = Class[1];
    }
    this.achievement = achievements;
  }
  username: string;

  email: string;

  full_name: string;

  gender: string;

  class: string;

  achievement: Achievement[];
}
