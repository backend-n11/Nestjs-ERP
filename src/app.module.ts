import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { CoursesModule } from './courses/courses.module';
import { UserCoursesModule } from './user-courses/user-courses.module';
import { CourseFilesModule } from './courses-files/courses-files.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.DATABASE_URL,
      autoLoadModels: true,
      synchronize: true,
      logging: false,
    }),
    AuthModule,
    UsersModule,
    FilesModule,
    CoursesModule,
    UserCoursesModule,
    CourseFilesModule,
  ],
})

export class AppModule {}
