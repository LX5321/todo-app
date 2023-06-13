import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
    _tasks : TaskModel[] = [
        {
            id: 1,
            description: "ABC",
            completed: true,
        }
    ]

    findAllTasks(): TaskModel[] {
        return this._tasks;
    }

    findTaskById(id: number): TaskModel | undefined {
        return this._tasks.find(t => t.id == id);
    }
}
