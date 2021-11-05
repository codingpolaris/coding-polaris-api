import { Test, TestingModule } from '@nestjs/testing';
import { RePathsController } from './re-paths.controller';
import { RePathsService } from './re-paths.service';

describe('RePathsController', () => {
  let controller: RePathsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RePathsController],
      providers: [RePathsService],
    }).compile();

    controller = module.get<RePathsController>(RePathsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
