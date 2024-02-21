import React from "react";
import Feature from "./Feature";

const SinglePrice = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className=" bg-purple-200 p-2 rounded  flex flex-col">
      <h2 className="text-center font-bold ">
        <span className="text-6xl ">{price}</span>
        <span className="text-6xl"></span>
      </h2>
      <h4 className="text-center text-2xl font-bold">{name}</h4>
      <div className="p-4 flex-grow ">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-400 p-2 font-bold text-xl w-full rounded-md">
        Subscribe Now
      </button>
    </div>
  );
};

export default SinglePrice;
