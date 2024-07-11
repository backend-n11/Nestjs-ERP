import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { UserCoursesModule } from './user-courses/user-courses.module';
import { CourseFilesModule } from './course-files/course-files.module';
import { CourseModule } from './course/course.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [

    UserModule, CourseModule, FilesModule, , UserCoursesModule, CourseFilesModule, AuthModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
