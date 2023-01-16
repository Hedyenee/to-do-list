import { ADD_TASK, FILTER_TASKS, EDIT_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: [],
  filter: 'all',
  id: 0
};

export function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      const newTask = { ...action.task, id: state.id + 1 };
      return { ...state, tasks: [...state.tasks, newTask], id: state.id + 1 };
    case FILTER_TASKS:
      return { ...state, filter: action.status };
    case EDIT_TASK:
      const { id } = action.task;
      const tasks = state.tasks.map((task) => {
        if (task.id === id) {
          return action.task;
        }
        return task;
      });
      return { ...state, tasks };
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.id) };
    default:
      return state;
  }
}