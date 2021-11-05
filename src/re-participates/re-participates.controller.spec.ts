import { Test, TestingModule } from '@nestjs/testing';
import { ReParticipatesController } from './re-participates.controller';
import { ReParticipatesService } from './re-participates.service';

describe('ReParticipatesController', () => {
  let controller: ReParticipatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReParticipatesController],
      providers: [ReParticipatesService],
    }).compile();

    controller = module.get<ReParticipatesController>(ReParticipatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
