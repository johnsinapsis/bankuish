import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CourseDto } from './course.dto';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ValidateNested({
    message:
      'Courses should be a array objects with desiredCourse and requiredCourse',
  })
  @Type(() => CourseDto)
  @IsNotEmpty()
  courses: Array<CourseDto>;
}
