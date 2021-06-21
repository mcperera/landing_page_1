import React from "react";

function ItemCard() {
  return (
    <div className="transition duration-300 ease-in-out text-center p-4 flex flex-col justify-center items-center rounded-lg hover:shadow-xl cursor-pointer">
      <img src="/images/furniture1.svg" alt="furniture-1" />
      <h1 className="font-semibold text-xl mb-4">Item Name</h1>
      <p className="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a
        assumenda dolor! Aspernatur.
      </p>
      <span className="font-bold text-xl">$150</span>
    </div>
  );
}

export default ItemCard;
