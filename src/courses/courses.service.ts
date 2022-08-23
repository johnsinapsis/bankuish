import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DeleteDuplicateCoursesService } from './services/deleteDuplicateCourses.service';
import { OrderCourseByPrerequisiteService } from './services/orderCourseByPrerequisite.service';

@Injectable()
export class CoursesService {
  constructor(
    private deleteDuplicateService: DeleteDuplicateCoursesService,
    private orderCourseByPrequisiteService: OrderCourseByPrerequisiteService,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    createCourseDto.courses =
      this.deleteDuplicateService.deleteDuplicateCourses(
        createCourseDto.courses,
      );
    const coursesList =
      this.orderCourseByPrequisiteService.orderCourseByPrerequisite(
        createCourseDto.courses,
      );
    console.log(coursesList);
    // TODO: validate if the userId have schedule with the courses
    return coursesList;
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
