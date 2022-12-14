import { TaskService } from './task.service';
import { schedule } from './scheduleDto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    get(params: any): Promise<schedule>;
    findAll(): Promise<schedule[]>;
    create(task: schedule): Promise<string>;
    update(task: schedule): Promise<string>;
}
