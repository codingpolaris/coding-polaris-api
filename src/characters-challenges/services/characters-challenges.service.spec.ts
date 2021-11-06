import { Test, TestingModule } from '@nestjs/testing';
import { CharactersChallengesService } from './characters-challenges.service';

describe('CharactersChallengesService', () => {
  let service: CharactersChallengesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersChallengesService],
    }).compile();

    service = module.get<CharactersChallengesService>(
      CharactersChallengesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
