import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { File } from './file.model';
import { User } from '../users/user.model';

@Injectable()
export class FilesService {
  constructor(
    @InjectModel(File)
    private fileModel: typeof File,
  ) {}

  async uploadFile(filename: string, path: string, userId: number): Promise<File> {
    return this.fileModel.create({ filename, path, userId });
  }

  async getFiles(userId: number, page: number, limit: number): Promise<{ rows: File[], count: number }> {
    return this.fileModel.findAndCountAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit,
    });
  }

  async getFileById(id: number): Promise<File> {
    return this.fileModel.findByPk(id);
  }

  async deleteFile(id: number): Promise<void> {
    await this.fileModel.destroy({ where: { id } });
  }

  async updateFile(id: number, filename: string, path: string): Promise<void> {
    await this.fileModel.update({ filename, path }, { where: { id } });
  }
}