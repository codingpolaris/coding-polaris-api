import { Character } from 'src/characters/entities/character.entity';
import { Path } from 'src/paths/entities/path.entity';

export class CreateCharactersPathDto {
  id: number;

  character: Character;

  path: Path;
}
