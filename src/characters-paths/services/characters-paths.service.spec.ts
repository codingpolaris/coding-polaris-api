import { Test, TestingModule } from '@nestjs/testing';
import { CharactersPathsService } from './characters-paths.service';

describe('CharactersPathsService', () => {
  let service: CharactersPathsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersPathsService],
    }).compile();

    service = module.get<CharactersPathsService>(CharactersPathsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
