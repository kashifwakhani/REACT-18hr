import React from "react";
import Item from "./Item";

const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleByButton={(event) => console.log(`${item} has been `)}
        />
      ))}
    </ul>
  );
};

export default Fooditems;
