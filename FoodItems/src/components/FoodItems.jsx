import Item from "./Item";
import { useState } from "react";

const FoodItems  = ({items}) =>{
  let[activeItems, setActiveItems] = useState([]);

  let onBuyButton = (index) =>{
    let newItems = [...activeItems, index];
    if (!activeItems.includes(index)) {
      setActiveItems([...activeItems, index]); // Add item to activeItems if not already present
    }
  };
    return (
        <>
      <ul className="list-group kg-item">
        {items.map((item , index) => (
          <Item 
          key={item} 
          foodItem={item}
          bought = {activeItems.includes(index)}
          handleBuyBtn = {() => onBuyButton(index)}
          ></Item>
          // <li className="list-group-item" >{item}</li>
          // <li key={item} className="list-group-item kg-span" >{item}</li>

        ))
        }
      </ul>
    </>
    )
    
}

export default FoodItems;