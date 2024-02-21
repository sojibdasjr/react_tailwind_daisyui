import React from "react";

const Link = ({ route }) => {
  return (
    <li className="mr-4 hover:ps-2 hover:bg-stone-200  duration-700 font-bold ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
