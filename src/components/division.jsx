import React from "react";

const Division = () => {
  let handleDivClick = () => {
    alert("divided two values");
  };
  return (
    <div>
      <button onClick={handleDivClick}></button>
    </div>
  );
};

export default Division;
