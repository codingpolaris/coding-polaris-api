import { Test, TestingModule } from '@nestjs/testing';
import { CharactersChallengesController } from './characters-challenges.controller';
import { CharactersChallengesService } from './services/characters-challenges.service';

describe('CharactersChallengesController', () => {
  let controller: CharactersChallengesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersChallengesController],
      providers: [CharactersChallengesService],
    }).compile();

    controller = module.get<CharactersChallengesController>(
      CharactersChallengesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
