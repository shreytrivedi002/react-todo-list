import { ADD_TASK } from "../constants";

export default function todolist(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { entries: action.data }];
      break;
    default:
      return state;
  }
}
