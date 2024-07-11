import { Controller, Post, UseGuards, UseInterceptors, UploadedFile, Req, Get, Delete, Param, Put, Body, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FilesService } from './files.service';
import { Request } from 'express';

@Controller('file')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req: Request) {
    return this.filesService.uploadFile(file.filename, file.path, req.body['userId']);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  listFiles(@Req() req: Request, @Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.filesService.getFiles(req.body['userId'], page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getFile(@Param('id') id: number) {
    return this.filesService.getFileById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteFile(@Param('id') id: number) {
    return this.filesService.deleteFile(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  updateFile(@Param('id') id: number, @Body() body) {
    const { filename, path } = body;
    return this.filesService.updateFile(id, filename, path);
  }
}