import React from "react";

const Multiplication = () => {
  let handleMulClick = () => {
    alert("Multiplied two values");
  };
  return (
    <div>
      <button onClick={handleMulClick}></button>
    </div>
  );
};

export default Multiplication;
