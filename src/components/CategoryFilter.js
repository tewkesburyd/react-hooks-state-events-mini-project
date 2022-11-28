import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory}) {

  const handleCategoryButton = (e) => {
    setSelectedCategory(e.target.innerText)
  }

  const categoryButton = categories.map(category => {
    return (
      <button 
        key={category} 
        onClick={handleCategoryButton}
        className={category === selectedCategory ? 'selected' : ''}
      >
        {category}
      </button>
      )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categoryButton}
    </div>
  );
}

export default CategoryFilter;
