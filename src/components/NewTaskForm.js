import React, {useState} from "react";

function NewTaskForm({categories, newFormData}) {

  const [formText, setFormText] = useState('')
  const [formCat, setFormCat] = useState("Code")

  const handleSubmit = (e) =>{
    e.preventDefault()
    newFormData({
      text: formText,
      category: formCat
    })
  }

  const handelCatChange = (e) => setFormCat(e.target.value)
  const handleTextChange = (e) => setFormText(e.target.value)

  const newOptions = categories.map(category => {
    return (
      category !== "All" ? 
        <option key={category} value={category}>{category}</option> :
        null
    )
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="name" onChange={handelCatChange}>
          {newOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
