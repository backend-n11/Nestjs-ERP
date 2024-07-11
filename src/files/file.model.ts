import { Table, Column, Model, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Course } from '../courses/course.model';
import { CourseFile } from '../courses-files/course-file.model';

@Table
export class File extends Model {
  @Column
  filename: string;

  @Column
  path: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsToMany(() => Course, () => CourseFile)
  courses: Course[];
}