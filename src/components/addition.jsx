import React from "react";

const Addition = () => {
  let handleAddClick = () => {
    alert("Added two values");
  };
  return (
    <div>
      <button className="btn btn-blue-900 border-green" onClick={handleAddClick}></button>
    </div>
  );
};

export default Addition;
