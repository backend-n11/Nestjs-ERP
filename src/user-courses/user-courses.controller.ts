import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCoursesService } from './user-courses.service';
import { CreateUserCourseDto } from './dto/create-user-course.dto';
import { UpdateUserCourseDto } from './dto/update-user-course.dto';

@Controller('user-courses')
export class UserCoursesController {
  constructor(private readonly userCoursesService: UserCoursesService) {}

  @Post()
  create(@Body() createUserCourseDto: CreateUserCourseDto) {
    return this.userCoursesService.create(createUserCourseDto);
  }

  @Get()
  findAll() {
    return this.userCoursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userCoursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserCourseDto: UpdateUserCourseDto) {
    return this.userCoursesService.update(+id, updateUserCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userCoursesService.remove(+id);
  }
}
