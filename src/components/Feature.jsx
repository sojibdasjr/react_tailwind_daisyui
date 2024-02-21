import React from "react";
import { FaCaretRight } from "react-icons/fa";

const Feature = ({ feature }) => {
  return (
    <div className="ps-6 ">
      <h1 className="flex items-center gap-2">
        <FaCaretRight className="text-green-500" />
        {feature}
      </h1>
    </div>
  );
};

export default Feature;
