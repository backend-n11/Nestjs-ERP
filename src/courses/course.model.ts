import { Table, Column, Model, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { File } from '../files/file.model';
import { CourseFile } from '../courses-files/course-file.model';

@Table
export class Course extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsToMany(() => File, () => CourseFile)
  files: File[];
}