import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseCategoryDto } from './dto/create.dto';
import { CourseCategoryOrmEntity } from 'src/common/infrastructure/database/typeorms/entities/course-category.orm';
import { UpdateCourseCategoryDto } from './dto/update.dto';
import { PaginatedResponse } from 'src/common/pagination/pagination.response';
import { GetAllCategoryDto } from './dto/query.dto';
import { CourseOrmEntity } from 'src/common/infrastructure/database/typeorms/entities/course.orm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CourseController {
  constructor(private readonly _courseService: CourseService) {}

  /** CRUD Course */
  @Post('create-course')
  async createCourse(@Body() body: CreateCourseDto): Promise<CourseOrmEntity> {
    return await this._courseService.createCourse(body);
  }

  @Get('all-courses')
  async getAllCourse(
    @Query() query: GetAllCategoryDto,
  ): Promise<PaginatedResponse<CourseOrmEntity>> {
    return await this._courseService.getAllCourse(query);
  }

  @Get('by-id/:id')
  async getCourseById(@Param('id') id: number): Promise<CourseOrmEntity> {
    return await this._courseService.getCourseById(id);
  }

  @Put('update-course/:id')
  async updateCourse(
    @Param('id') id: number,
    @Body() body: UpdateCourseDto,
  ): Promise<CourseOrmEntity> {
    return await this._courseService.updateCourse(id, body);
  }

  @Delete('delete-course/:id')
  async deleteCourse(@Param('id') id: number): Promise<void> {
    return await this._courseService.deleteCourse(id);
  }

  /** CRUD Course Category */
  @Get('categories')
  async getAllCategory(
    @Query() query: GetAllCategoryDto,
  ): Promise<PaginatedResponse<CourseCategoryOrmEntity>> {
    return await this._courseService.getAllCategory(query);
  }

  @Post('create-category')
  async createCategory(
    @Body() body: CreateCourseCategoryDto,
  ): Promise<CourseCategoryOrmEntity> {
    return await this._courseService.createCategory(body);
  }

  @Put('update-category/:id')
  async updateCategory(
    @Param('id') id: number,
    @Body() body: UpdateCourseCategoryDto,
  ): Promise<CourseCategoryOrmEntity> {
    return await this._courseService.updateCategory(id, body);
  }

  @Delete('delete-category/:id')
  async deleteCategory(@Param('id') id: number): Promise<void> {
    return await this._courseService.deleteCategory(id);
  }
}
