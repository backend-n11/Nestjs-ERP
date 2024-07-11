import { Controller, Post, UseGuards, Req, Get, Delete, Param, Body } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CourseFilesService } from './courses-files.service';
import { Request } from 'express';

@Controller('course-files')
export class CourseFilesController {
  constructor(private readonly courseFilesService: CourseFilesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('set-course-file')
  assignFileToCourse(@Body() body) {
    const { courseId, fileId } = body;
    return this.courseFilesService.assignFileToCourse(courseId, fileId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':courseId/files')
  getFilesForCourse(@Param('courseId') courseId: number) {
    return this.courseFilesService.getFilesForCourse(courseId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':courseId/files/:fileId')
  deleteCourseFile(@Param('courseId') courseId: number, @Param('fileId') fileId: number) {
    return this.courseFilesService.deleteCourseFile(courseId, fileId);
  }
}