import { Test, TestingModule } from '@nestjs/testing';
import { RePerformsService } from './re-performs.service';

describe('RePerformsService', () => {
  let service: RePerformsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RePerformsService],
    }).compile();

    service = module.get<RePerformsService>(RePerformsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
