import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';
import { filterTasks } from '../store/actions';

export default function ListTask() {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(filterTasks(value));
  }

  return (
    <div>
      <select onChange={handleChange} value={filter}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
      </select>
      <ul>
        {tasks
          .filter((task) => {
            if (filter === 'all') return true;
            if (filter === 'done') return task.isDone;
            if (filter === 'not-done') return !task.isDone;
          })
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </ul>
    </div>
  );
}