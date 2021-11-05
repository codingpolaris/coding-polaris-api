import { Test, TestingModule } from '@nestjs/testing';
import { RePathsService } from './re-paths.service';

describe('RePathsService', () => {
  let service: RePathsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RePathsService],
    }).compile();

    service = module.get<RePathsService>(RePathsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
