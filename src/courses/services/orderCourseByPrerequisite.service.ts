import { Injectable } from '@nestjs/common';
import { CourseDto } from '../dto/course.dto';

@Injectable()
export class OrderCourseByPrerequisiteService {
  orderCourseByPrerequisite(courses: CourseDto[]) {
    const orderedCourses = this.getSortedCourses(courses);
    const uniqueCourses = orderedCourses.filter((item, index) => {
      return orderedCourses.indexOf(item) === index;
    });

    return uniqueCourses;
  }

  getSortedCourses(courses: CourseDto[]): Array<string> {
    let pendingCourses = courses;
    const orderedCourses = [];
    let firstCourse;
    while (pendingCourses.length > 0) {
      pendingCourses.forEach((course) => {
        const compareCourse = pendingCourses.find(
          (findCourse) => findCourse.desiredCourse === course.requiredCourse,
        );
        if (!compareCourse) {
          firstCourse = course.requiredCourse;
          orderedCourses.push(firstCourse);
          orderedCourses.push(course.desiredCourse);
        }
      });

      pendingCourses = pendingCourses.filter(
        (courses) => courses.requiredCourse !== firstCourse,
      );
    }
    return orderedCourses;
  }
}
