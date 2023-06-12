import React, { useCallback, useState } from "react";
import { List } from "./List";

export const Callback = () => {
  const [color, setColor] = useState("Red");
  const [number, setNumber] = useState(1);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, []);

  const theme = { background: color };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div style={theme}>
        <span>{color}</span>
      </div>
      <button>Click</button>
      <List getItems={getItems} />
    </div>
  );
};
