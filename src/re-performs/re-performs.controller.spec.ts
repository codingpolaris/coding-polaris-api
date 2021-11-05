import { Test, TestingModule } from '@nestjs/testing';
import { RePerformsController } from './re-performs.controller';
import { RePerformsService } from './re-performs.service';

describe('RePerformsController', () => {
  let controller: RePerformsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RePerformsController],
      providers: [RePerformsService],
    }).compile();

    controller = module.get<RePerformsController>(RePerformsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
