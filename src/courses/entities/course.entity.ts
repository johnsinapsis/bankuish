import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleCourses } from './scheduleCourses.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true })
  name: string;

  @OneToMany(() => ScheduleCourses, (course) => course.course, {
    cascade: true,
  })
  courses: ScheduleCourses[];
}
