import React, { useState, useMemo } from "react";

export const Counter = () => {
  const [inCount, setInCount] = useState(0);
  const [deCount, setDeCount] = useState(0);

  const addIncrment = () => {
    setInCount(inCount + 1);
  };

  const subDecrement = () => {
    setDeCount(deCount - 1);
  };

  const isEven = useMemo(() => {
    console.log("settings");
    return inCount % 2 === 0;
  });

  return (
    <div>
      <div>
        <button onClick={addIncrment}>Increment</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={subDecrement}>Decrement</button>

        <span>{deCount}</span>
      </div>
    </div>
  );
};
