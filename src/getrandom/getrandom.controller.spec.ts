import { Test, TestingModule } from '@nestjs/testing';
import { GetrandomController } from './getrandom.controller';

describe('Getrandom Controller', () => {
  let controller: GetrandomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetrandomController],
    }).compile();

    controller = module.get<GetrandomController>(GetrandomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
