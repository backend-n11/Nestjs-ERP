// src/files/files.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './file.model';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  providers: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
