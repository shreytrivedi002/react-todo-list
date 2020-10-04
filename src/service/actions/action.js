import { ADD_TASK } from "../constants";

export const addTask = (data) => {
  return {
    type: ADD_TASK,
    data: data,
  };
};
