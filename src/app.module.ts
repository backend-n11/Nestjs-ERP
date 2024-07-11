import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';
import { UserCoursesModule } from './user-courses/user-courses.module';
import { CourseFilesModule } from './course-files/course-files.module';

@Module({
  imports: [UserModule, FilesModule, CoursesModule, UserCoursesModule, CourseFilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
