import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("All");

  function handleChange(e) {
    setCategory((selectedCategory) => e.target.value)
    console.log(selectedCategory)
    
  };

  function filterItems() {
    if (selectedCategory !== "All") {
      return items.filter(item => item.category === selectedCategory)
    } else {
      return items
    }
    
  }

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select  name="filter" >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {
          filterItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />

        ))}

                
      </ul>
    </div>
  );
}

export default ShoppingList;
