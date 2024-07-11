import { Injectable } from '@nestjs/common';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';

@Injectable()
export class UserCoursesService {
  create(createUserCourseDto: CreateUserCourseDto) {
    return 'This action adds a new userCourse';
  }

  findAll() {
    return `This action returns all userCourses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCourse`;
  }

  update(id: number, updateUserCourseDto: UpdateUserCourseDto) {
    return `This action updates a #${id} userCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCourse`;
  }
}
