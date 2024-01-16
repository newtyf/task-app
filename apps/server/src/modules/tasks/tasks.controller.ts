import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { Task } from 'src/models';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { ListTaskDto } from './dto/list-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(AuthenticationGuard)
  @Get()
  getTasks(@Body() auth: ListTaskDto): Promise<Task[]> {
    this.logger.log('listk tasks');
    return this.tasksService.getTasks(auth);
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  async saveTask(@Body() task: CreateTaskDto): Promise<Task> {
    this.logger.log('SAVE user');
    return await this.tasksService.saveTask(task);
  }
}
