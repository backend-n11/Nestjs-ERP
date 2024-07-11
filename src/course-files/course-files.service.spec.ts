import { Test, TestingModule } from '@nestjs/testing';
import { CourseFilesService } from './course-files.service';

describe('CourseFilesService', () => {
  let service: CourseFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseFilesService],
    }).compile();

    service = module.get<CourseFilesService>(CourseFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
