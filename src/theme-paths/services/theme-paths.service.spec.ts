import { Test, TestingModule } from '@nestjs/testing';
import { ThemePathsService } from './theme-paths.service';

describe('ThemePathsService', () => {
  let service: ThemePathsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemePathsService],
    }).compile();

    service = module.get<ThemePathsService>(ThemePathsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
