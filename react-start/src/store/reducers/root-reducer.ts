import { Reducer } from "redux";
import { ADD_TO_DO, GET_TO_DO_LIST, REMOVE_TO_DO, SAVE_TO_DO, SELECT_TO_DO } from "../actions/to-do-list.action";
import initialState from "../initial-state";
import { ActionIO } from "../model/action.model";
import { StateIO } from "../model/state.model";

const reducer: Reducer<StateIO, ActionIO> = (state = initialState, action: ActionIO): StateIO => {
  switch (action.type) {
    case GET_TO_DO_LIST: return { ...state, toDoList: action.value };
    case ADD_TO_DO: return { ...state, toDoList: [...state?.toDoList, action.value] };
    case SELECT_TO_DO: return {...state, selectToDo: action.value};
    case REMOVE_TO_DO: return {...state, toDoList: state?.toDoList.filter((toDo) => toDo.id !== action.value.id), selectToDo: null};
    case SAVE_TO_DO: return {...state, toDoList: state?.toDoList.map((toDoState) => toDoState.id === action.value.id? action.value : toDoState)};


    default: return state;
  }
}

export default reducer;