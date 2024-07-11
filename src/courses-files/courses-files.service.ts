import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CourseFile } from './course-file.model';
import { File } from '../files/file.model';
import { Course } from '../courses/course.model';

@Injectable()
export class CourseFilesService {
  constructor(
    @InjectModel(CourseFile)
    private courseFileModel: typeof CourseFile,
  ) {}

  async assignFileToCourse(courseId: number, fileId: number): Promise<CourseFile> {
    return this.courseFileModel.create({ courseId, fileId });
  }

  async getFilesForCourse(courseId: number): Promise<File[]> {
    const courseFiles = await this.courseFileModel.findAll({ where: { courseId }, include: [File] });
    return courseFiles.map((cf: any) => cf.file);
  }

  async deleteCourseFile(courseId: number, fileId: number): Promise<void> {
    await this.courseFileModel.destroy({ where: { courseId, fileId } });
  }
}