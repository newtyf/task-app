import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from 'src/models';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>,
  ) {}

  async getTasks(): Promise<Task[]> {
    return await this.tasksRepository.find({
      relations: { user: true },
    });
  }

  async saveTask({
    title,
    description,
    done,
    payload,
  }: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create({
      title,
      description,
      done,
      user: payload,
    });

    const savedTask = await this.tasksRepository.save(task);
    return savedTask;
  }
}
