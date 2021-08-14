import React, {useState} from "react";

function Item({ name, category }) {
const [inCart, setClassName] = useState(false);
const listClass = inCart ? "in-cart" : "";
const buttonClass = inCart ? "remove" : "add";

  function handleClick (e) {
    setClassName((inCart) => !inCart)

  }
  return (
    <li className={listClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={buttonClass}>{inCart ? "Remove from cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
