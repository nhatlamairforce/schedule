import { Injectable } from '@nestjs/common';
import {schedule} from './scheduleDto'
import arr from './data'
@Injectable()
export class TaskService {
    async findAll (): Promise<schedule[]> {
        return arr;
      }
    
    async findOne (id: number): Promise<schedule> {
        let result = null;
        arr.forEach(function (arr1val) {
            if (arr1val["id"] == id)
                result = arr1val;
        });
        return result;
    }

    async create (task: schedule): Promise<string> {
        arr.push(task);
        return "Success";
      }
    
    async update(task: schedule): Promise<string> {
        let result = "Not found";
        arr.forEach(function (arr1val) {
            if (arr1val["id"] == task["id"]){
                arr1val = task;
                result = "Success";
            }
        });
        return result;
    }
}
