import { IsNotEmpty, IsString } from 'class-validator';

export class CourseDto {
  @IsNotEmpty()
  @IsString()
  desiredCourse: string;

  @IsNotEmpty()
  @IsString()
  requiredCourse: string;
}
