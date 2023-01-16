import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../store/actions';

export default function AddTask() {
  const [task, setTask] = useState({ id: '', description: '', isDone: false });
  const dispatch = useDispatch();
  const id = useSelector(state => state.idCounter);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { ...task, id: id + 1 };
    dispatch(addTask(newTask));
    setTask({ id: '', description: '', isDone: false });
  }

  return (
    <form onSubmit={handleSubmit}  style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <input
        type="text"
        name="description"
        placeholder="Task description"
        value={task.description} 
        onChange={handleChange}
      />
      <button type="submit" style={{backgroundColor: "blue", color: "white", padding: "10px 10px", border: "none", cursor: "pointer"}}>Add task</button>
    </form>
  );
}