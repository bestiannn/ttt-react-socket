import React from "react";

const Score = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span>x (YOU)</span>
        <strong>14</strong>
      </div>
      <div className="flex flex-col">
        <span>TIES</span>
        <strong>32</strong>
      </div>
      <div className="flex flex-col">
        <span>O (CPU)</span>
        <strong>11</strong>
      </div>
    </div>
  );
};

export default Score;
