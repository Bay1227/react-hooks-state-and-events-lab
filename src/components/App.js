import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // function Toggle() {
    
    const [isOn, setIsOn] = useState(false);
    const liClass = isOn ? "App dark" : "App light";
    
    function handleClick() {
    setIsOn((isOn) => !isOn)
    }


  return (
    <div className={liClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {isOn ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
