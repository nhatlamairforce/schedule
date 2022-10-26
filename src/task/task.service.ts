import { Injectable } from '@nestjs/common';
import {schedule} from './scheduleDto'
import arr from './data'
@Injectable()
export class TaskService {
    async findAll (): Promise<schedule[]> {
        return arr;
      }
    
    async findOne (id: number): Promise<schedule> {
      return arr[id];
    }
}
