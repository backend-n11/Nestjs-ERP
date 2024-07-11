import { Controller, Post, UseGuards, Req, Get, Delete, Param, Put, Body, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CoursesService } from './courses.service';
import { Request } from 'express';

@Controller('course')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createCourse(@Body() body, @Req() req: Request) {
    const { title, description } = body;
    return this.coursesService.createCourse(title, description, req.body['userId']);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  listCourses(@Req() req: Request, @Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.coursesService.getCourses(req.body['userId'], page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getCourse(@Param('id') id: number) {
    return this.coursesService.getCourseById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteCourse(@Param('id') id: number) {
    return this.coursesService.deleteCourse(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateCourse(@Param('id') id: number, @Body() body) {
    const { title, description } = body;
    return this.coursesService.updateCourse(id, title, description);
  }
}