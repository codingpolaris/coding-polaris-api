import { Test, TestingModule } from '@nestjs/testing';
import { CharactersThemesService } from './services/characters-themes.service';

describe('CharactersThemesService', () => {
  let service: CharactersThemesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharactersThemesService],
    }).compile();

    service = module.get<CharactersThemesService>(CharactersThemesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
