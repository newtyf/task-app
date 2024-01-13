import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { Task } from 'src/models';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthenticationGuard } from '../authentication/authentication.guard';

@Controller('tasks')
export class TasksController {

  constructor(
    private readonly tasksService: TasksService,
    private readonly logger: Logger,
  ) {}

  @Get()
  getTasks(): Promise<Task[]> {
    this.logger.log("listk tasks")
    return this.tasksService.getTasks();
  }

  @UseGuards(AuthenticationGuard)
  @Post()
  async saveTask(@Body() task: CreateTaskDto): Promise<Task> {
    this.logger.log('SAVE user');

    console.log(task)
    return await this.tasksService.saveTask(task);
  }

}
