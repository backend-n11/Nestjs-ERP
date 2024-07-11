import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseFilesService } from './course-files.service';
import { CreateCourseFileDto } from './dto/create-course-file.dto';
import { UpdateCourseFileDto } from './dto/update-course-file.dto';

@Controller('course-files')
export class CourseFilesController {
  constructor(private readonly courseFilesService: CourseFilesService) {}

  @Post()
  create(@Body() createCourseFileDto: CreateCourseFileDto) {
    return this.courseFilesService.create(createCourseFileDto);
  }

  @Get()
  findAll() {
    return this.courseFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseFilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseFileDto: UpdateCourseFileDto) {
    return this.courseFilesService.update(+id, updateCourseFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseFilesService.remove(+id);
  }
}
