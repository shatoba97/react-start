import { ToDoIO } from "../../core/model/to-do.model";

export interface StateIO{
    toDoList: ToDoIO[],
    selectToDo: null | ToDoIO,
}