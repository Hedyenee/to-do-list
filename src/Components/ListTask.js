import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { filterTasks } from "../store/actions";

export default function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(filterTasks(value));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select onChange={handleChange} value={filter} 
      style={{padding: "5px", fontSize: "1rem", marginBottom: "5px", borderRadius: "5px"}}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not-done">Not Done</option>
      </select>
      <ul>
        {tasks.map((task) => {
          switch (filter) {
            case "all":
              return <Task key={task.id} task={task} />;
            case "done":
              if (task.isDone) {
                return <Task key={task.id} task={task} />;
              }
              break;
            case "not-done":
              if (!task.isDone) {
                return <Task key={task.id} task={task} />;
              }
              break;
            default:
              break;
          }
        })}
      </ul>
    </div>
  );
}
