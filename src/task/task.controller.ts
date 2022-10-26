
import { Controller, Get, Param,Post,Body,Put } from '@nestjs/common';
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

  @Post()
  create(@Body() task: schedule) {
    return this.taskService.create(task);
  }

  @Put()
  update(@Body() task: schedule) {
    return this.taskService.update(task);
  }
}
