import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [data, setData] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const visibleTasks = data.filter(task => {
    return (
      selectedCategory === "All" ? true : task.category === selectedCategory ? task : null
    )})
  
  const handleDeleteClick = (taskString) => {
    setData(data.filter(task => task.text !== taskString ? task : null))
  }

  const newFormData = (newData) => setData([...data,newData])

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <NewTaskForm categories={CATEGORIES} newFormData={newFormData}/>
      <TaskList tasks={visibleTasks} handleDeleteClick={handleDeleteClick}/>
    </div>
  );
}

export default App;
