import { ToDoIO } from "../../core/model/to-do.model";

export type ListContainerType = {
  toDoList: ToDoIO[];
  addToDo: (toDo: ToDoIO) => void;
  selectToDo: (id: number) => void;
}