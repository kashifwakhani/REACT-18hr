import React, { useState } from "react";
import Item from "./Item";

const Fooditems = ({ items }) => {
  let [activeItems, setactiveItems] = useState([]);
  let OnByButton = (event, items) => {
    let newItems = [...activeItems, items];
    setactiveItems(newItems);
  };
  console.log(activeItems);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleByButton={(event) => OnByButton(event, items)}
          bought={activeItems.includes(item)}
        />
      ))}
    </ul>
  );
};

export default Fooditems;
