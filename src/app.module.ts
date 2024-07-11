import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { FilesModule } from './files/files.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({envFilePath : ".env", isGlobal : true}), UsersModule, AuthModule, CoursesModule, FilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
