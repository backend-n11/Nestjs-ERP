import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourse } from './user-course.model';
import { UserCoursesService } from './user-courses.service';
import { UserCoursesController } from './user-courses.controller';

@Module({
  imports: [SequelizeModule.forFeature([UserCourse])],
  providers: [UserCoursesService],
  controllers: [UserCoursesController],
})
export class UserCoursesModule {}