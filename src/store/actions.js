export const ADD_TASK = 'ADD_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(task) {
  return { type: ADD_TASK, task };
}

export function filterTasks(status) {
  return { type: FILTER_TASKS, status };
}

export function editTask(task) {
  return { type: EDIT_TASK, task };
}

export function deleteTask(id) {
  return { type: DELETE_TASK, id };
}