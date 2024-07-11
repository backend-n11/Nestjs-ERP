import { Controller, Post, UseGuards, Req, Get, Delete, Param, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserCoursesService } from './user-courses.service';
import { Request } from 'express';

@Controller('user-courses')
export class UserCoursesController {
  constructor(private readonly userCoursesService: UserCoursesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('set-user-course')
  setUserCourse(@Body() body, @Req() req: Request | any) {
    const { courseId } = body;
    return this.userCoursesService.setUserCourse(req.user['userId'], courseId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getUserCourses(@Req() req: Request | any) {
    return this.userCoursesService.getUserCourses(req.user['userId']);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':courseId')
  deleteUserCourse(@Param('courseId') courseId: number, @Req() req: Request | any) {
    return this.userCoursesService.deleteUserCourse(req.user['userId'], courseId);
  }
}