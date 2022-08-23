import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from '../entities/schedule.entity';

@Injectable()
export class ScheduleService {
  private readonly logger = new Logger('ScheduleService');

  constructor(
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async create(userId: string) {
    try {
      const schedule = this.scheduleRepository.create({ userId });
      await this.scheduleRepository.save(schedule);
    } catch (error) {
      console.error('******', error.message);
      throw new HttpException(error.message, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  async findByUserId(userId: string) {
    return `This action returns all schedules for user ${userId}`;
  }
}
