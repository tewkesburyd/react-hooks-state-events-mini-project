import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDeleteClick}) {

  const createTasks = tasks.map(task => {
   return (
    <Task 
      key={task.text} 
      task={task} 
      handleDeleteClick={handleDeleteClick}
    />
    )})

  return (
    <div className="tasks">
      {createTasks}
    </div>
  );
}

export default TaskList;
