import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { EnvConfig } from './config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: [EnvConfig],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: EnvConfig().db.host,
      port: EnvConfig().db.port,
      username: EnvConfig().db.user,
      password: EnvConfig().db.password,
      database: EnvConfig().db.name,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CoursesModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
