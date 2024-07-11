import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UsersModule, AuthModule, CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
