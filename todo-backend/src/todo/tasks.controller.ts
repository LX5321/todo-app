import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    getTasks(): Array<TaskModel> {
        return this.taskService.findAllTasks();
    }

    @Get(':taskId')
    getTaskById(@Param('taskId') id: number) {
        let task = this.taskService.findTaskById(id);

        if (!task) {
            throw new NotFoundException("Task for that id was not found.");
        }

        return task;
    }
}
