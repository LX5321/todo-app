import { Body, Controller, Get, NotFoundException, Param, Post, UsePipes } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';
import { ValidationPipe } from '../../pipes/ValidationPipe';
import { ApiBody } from '@nestjs/swagger';

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

    @Post()
    @UsePipes(new ValidationPipe())
    @ApiBody({ type: TaskModel, examples: { example1: { value: { id: 1, completed: false, description: "A sample" } } } })
    async addTask(@Body() data: TaskModel) {
        this.taskService.addTaskToList(data);
        return data;
    }
}
