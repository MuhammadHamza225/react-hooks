import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert(`Count reach to it's maximum value`);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count cannot go below 0");
    }
  };
  const counterColor = () => {
    if (count === 10) return "text-green-500";
    if (count === 0) return "text-red-500";
    return "text-blue-500";
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center h-screen">
      <h1 className="p-4 text-5xl font-bold">Counter</h1>
      <div className="font-bold text-3xl flex items-center gap-8">
        <button
          onClick={decrement}
          className="border-2 border-white flex items-center justify-center w-12 h-8 pb-1 rounded transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:cursor-pointer"
        >
          -
        </button>
        <span className={`mx-10 ${counterColor()}`}>{count}</span>
        <button
          onClick={increament}
          className="border-2 border-white flex items-center justify-center w-12 h-8 pb-1 rounded transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default UseState;
