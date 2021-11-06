import { Test, TestingModule } from '@nestjs/testing';
import { ThemePathsController } from './theme-paths.controller';
import { ThemePathsService } from './services/theme-paths.service';

describe('ThemePathsController', () => {
  let controller: ThemePathsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThemePathsController],
      providers: [ThemePathsService],
    }).compile();

    controller = module.get<ThemePathsController>(ThemePathsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
