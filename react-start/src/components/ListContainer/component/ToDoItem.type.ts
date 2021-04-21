import { ToDoIO } from "../../../core/model/to-do.model";

export type ToDoItemType = {
  toDoItem: ToDoIO;
  selectToDo: (id: number) => void;
}