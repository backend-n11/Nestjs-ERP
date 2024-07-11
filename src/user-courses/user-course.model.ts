import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Course } from '../courses/course.model';

@Table
export class UserCourse extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Course)
  @Column
  courseId: number;
}
