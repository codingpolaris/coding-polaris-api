import { Test, TestingModule } from '@nestjs/testing';
import { ReParticipatesService } from './re-participates.service';

describe('ReParticipatesService', () => {
  let service: ReParticipatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReParticipatesService],
    }).compile();

    service = module.get<ReParticipatesService>(ReParticipatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
