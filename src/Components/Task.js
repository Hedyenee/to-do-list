import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../store/actions';

export default function Task({ task }) {
  const [editMode, setEditMode] = useState(false);
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [taskId, setTaskId] = useState(task.id);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditMode(!editMode);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") setTaskDescription(value);
    if (name === "id") setTaskId(value);
  }

  const handleSave = () => {
    const updatedTask = {id: taskId, description: taskDescription, isDone: task.isDone}
    setEditMode(!editMode);
    dispatch(editTask(updatedTask));
  }

  return (
    <li>
      {editMode ? 
        <>
          { <span>{task.id}</span> }
          <input
            type="text"
            name="description"
            value={taskDescription}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
        :
        <>
          <span>{task.id} - {task.description}</span>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => {
              task.isDone = !task.isDone;
              dispatch(editTask(task));
            }}
          />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </>
      }
    </li>
  );
}
