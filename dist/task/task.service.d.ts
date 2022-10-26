import { schedule } from './scheduleDto';
export declare class TaskService {
    findAll(): Promise<schedule[]>;
    findOne(id: number): Promise<schedule>;
    create(task: schedule): Promise<string>;
    update(task: schedule): Promise<string>;
}
