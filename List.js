import React, { useState, useEffect } from "react";

export const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(getItems.getItems);
    setItems(getItems());
  }, [getItems]);
  return (
    <div>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
