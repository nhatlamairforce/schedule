
import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service'
import {schedule} from './scheduleDto'
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {

  }
  @Get(':id')
  get(@Param() params): Promise<schedule> {
      return this.taskService.findOne(params.id);
  }
  
  @Get()
  findAll(): Promise<schedule[]> {
    return this.taskService.findAll()
  }
}
