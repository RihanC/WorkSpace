import React from "react";

const Subtraction = () => {
  let handleSubClick = () => {
    alert("Subtracted two values");
  };
  return (
    <div>
      <button onClick={handleSubClick}></button>
    </div>
  );
};

export default Subtraction;
