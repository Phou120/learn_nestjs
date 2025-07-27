import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create.dto';
import { TeacherOrmEntity } from 'src/common/infrastructure/database/typeorms/entities/teacher.orm';
import { UpdateTeacherDto } from './dto/update.dto';
import { PaginatedResponse } from 'src/common/pagination/pagination.response';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly _teacherService: TeacherService) {}
  @Get('get-all')
  getAll(@Query() query: any): Promise<PaginatedResponse<TeacherOrmEntity>> {
    return this._teacherService.getAllTeachers(query);
  }

  @Post()
  async createTeacher(
    @Body() body: CreateTeacherDto,
  ): Promise<TeacherOrmEntity> {
    return await this._teacherService.createTeacher(body);
  }

  @Put('update-teacher/:id')
  async updateTeacher(
    @Param('id') id: number,
    @Body() body: UpdateTeacherDto,
  ): Promise<TeacherOrmEntity> {
    return await this._teacherService.updateTeacher(id, body);
  }
}
