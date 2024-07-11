import { PartialType } from '@nestjs/mapped-types';
import { CreateCoursesFileDto } from './create-courses-file.dto';

export class UpdateCoursesFileDto extends PartialType(CreateCoursesFileDto) {}
