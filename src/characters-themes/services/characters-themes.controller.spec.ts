import { Test, TestingModule } from '@nestjs/testing';
import { CharactersThemesController } from '../characters-themes.controller';
import { CharactersThemesService } from './characters-themes.service';

describe('CharactersThemesController', () => {
  let controller: CharactersThemesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharactersThemesController],
      providers: [CharactersThemesService],
    }).compile();

    controller = module.get<CharactersThemesController>(
      CharactersThemesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
