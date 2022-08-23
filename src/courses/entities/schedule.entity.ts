import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ScheduleCourses } from './scheduleCourses.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', { unique: true })
  userId: string;

  @OneToMany(() => ScheduleCourses, (course) => course.schedule, {
    cascade: true,
  })
  courses: ScheduleCourses[];
}
