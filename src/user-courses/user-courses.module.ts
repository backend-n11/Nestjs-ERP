import { Module } from '@nestjs/common';
import { UserCoursesService } from './user-courses.service';
import { UserCoursesController } from './user-courses.controller';

@Module({
  controllers: [UserCoursesController],
  providers: [UserCoursesService],
})
export class UserCoursesModule {}
