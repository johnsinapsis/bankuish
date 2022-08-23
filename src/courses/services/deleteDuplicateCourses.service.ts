import { Injectable } from '@nestjs/common';
import { CourseDto } from '../dto/course.dto';

@Injectable()
export class DeleteDuplicateCoursesService {
  deleteDuplicateCourses(courses: CourseDto[]) {
    const uniqueCourses = [];
    courses.forEach((course) => {
      if (
        !uniqueCourses.some(
          (uniqueCourse) => uniqueCourse.desiredCourse === course.desiredCourse,
        )
      ) {
        uniqueCourses.push(course);
      }
    });
    return uniqueCourses;
  }
}
