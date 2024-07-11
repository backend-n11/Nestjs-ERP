import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCourse } from './user-course.model';
import { User } from '../users/user.model';
import { Course } from '../courses/course.model';

@Injectable()
export class UserCoursesService {
  constructor(
    @InjectModel(UserCourse)
    private userCourseModel: typeof UserCourse,
  ) {}

  async setUserCourse(userId: number, courseId: number): Promise<UserCourse> {
    return this.userCourseModel.create({ userId, courseId });
  }

  async getUserCourses(userId: number): Promise<UserCourse[]> {
    return this.userCourseModel.findAll({ where: { userId } });
  }

  async deleteUserCourse(userId: number, courseId: number): Promise<void> {
    await this.userCourseModel.destroy({ where: { userId, courseId } });
  }
}