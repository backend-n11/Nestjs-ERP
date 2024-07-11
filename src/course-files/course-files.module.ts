import { Module } from '@nestjs/common';
import { CourseFilesService } from './course-files.service';
import { CourseFilesController } from './course-files.controller';

@Module({
  controllers: [CourseFilesController],
  providers: [CourseFilesService],
})
export class CourseFilesModule {}
