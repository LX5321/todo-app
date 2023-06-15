import { IsBoolean, IsInt, IsString } from "class-validator";

export class TaskModel {
    @IsInt()
    id: number = 1;

    @IsString()
    description: String = "test";

    @IsBoolean()
    completed: Boolean = false;
}
