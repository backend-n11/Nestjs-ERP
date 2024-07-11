import { Test, TestingModule } from '@nestjs/testing';
import { CourseFilesController } from './course-files.controller';
import { CourseFilesService } from './course-files.service';

describe('CourseFilesController', () => {
  let controller: CourseFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseFilesController],
      providers: [CourseFilesService],
    }).compile();

    controller = module.get<CourseFilesController>(CourseFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
