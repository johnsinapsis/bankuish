import { Module } from '@nestjs/common';
import { DeleteDuplicateCoursesService } from './services/deleteDuplicateCourses.service';
import { OrderCourseByPrerequisiteService } from './services/orderCourseByPrerequisite.service';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Schedule } from './entities/schedule.entity';
import { ScheduleCourses } from './entities/scheduleCourses.entity';

@Module({
  controllers: [CoursesController],
  providers: [
    DeleteDuplicateCoursesService,
    OrderCourseByPrerequisiteService,
    CoursesService,
  ],
  imports: [TypeOrmModule.forFeature([Course, Schedule, ScheduleCourses])],
})
export class CoursesModule {}
