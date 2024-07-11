import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from './course.model';
import { User } from '../users/user.model';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course)
    private courseModel: typeof Course,
  ) {}

  async createCourse(title: string, description: string, userId: number): Promise<Course> {
    return this.courseModel.create({ title, description, userId });
  }

  async getCourses(userId: number, page: number, limit: number): Promise<{ rows: Course[], count: number }> {
    return this.courseModel.findAndCountAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit,
    });
  }

  async getCourseById(id: number): Promise<Course> {
    return this.courseModel.findByPk(id);
  }

  async deleteCourse(id: number): Promise<void> {
    await this.courseModel.destroy({ where: { id } });
  }

  async updateCourse(id: number, title: string, description: string): Promise<void> {
    await this.courseModel.update({ title, description }, { where: { id } });
  }
}