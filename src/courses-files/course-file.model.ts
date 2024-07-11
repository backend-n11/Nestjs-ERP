import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Course } from '../courses/course.model';
import { File } from '../files/file.model';

@Table
export class CourseFile extends Model {
  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @ForeignKey(() => File)
  @Column
  fileId: number;
}