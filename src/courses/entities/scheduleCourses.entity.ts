import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule } from './schedule.entity';
import { Course } from './course.entity';

@Entity()
export class ScheduleCourses {
  @PrimaryGeneratedColumn()
  id: number;

  /* @Column('uuid')
  scheduleId: string;

  @Column('uuid')
  courseId: string; */

  @ManyToOne(() => Schedule, (schedule) => schedule.courses)
  schedule: Schedule;

  @ManyToOne(() => Course, (course) => course.courses)
  course: Course;
}
