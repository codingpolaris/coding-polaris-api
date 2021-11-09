import { Test, TestingModule } from '@nestjs/testing';
import { CharactersPathsController } from './characters-paths.controller';
import { CharactersPathsService } from './services/characters-paths.service';

describe('CharactersPathsController', () => {
  let controller: CharactersPathsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersPathsController],
      providers: [CharactersPathsService],
    }).compile();

    controller = module.get<CharactersPathsController>(
      CharactersPathsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
