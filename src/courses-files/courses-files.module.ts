import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CourseFile } from './course-file.model';
import { CourseFilesService } from './courses-files.service';
import { CourseFilesController } from './courses-files.controller';

@Module({
  imports: [SequelizeModule.forFeature([CourseFile])],
  providers: [CourseFilesService],
  controllers: [CourseFilesController],
})
export class CourseFilesModule {}