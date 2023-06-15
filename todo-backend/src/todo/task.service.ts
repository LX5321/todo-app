import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
    _tasks : TaskModel[] = []

    findAllTasks(): TaskModel[] {
        return this._tasks;
    }

    findTaskById(id: number): TaskModel | undefined {
        return this._tasks.find(t => t.id == id);
    }

    addTaskToList(task: TaskModel): TaskModel {
        this._tasks.push(task);
        return task;
    }
}
