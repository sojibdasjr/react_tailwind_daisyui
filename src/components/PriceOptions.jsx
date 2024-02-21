import React from "react";
import SinglePrice from "./SinglePrice";

const PriceOptions = () => {
  const membershipOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$30/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to locker rooms",
        "Limited access to group fitness classes",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$50/month",
      features: [
        "Access to all equipment in Basic Membership",
        "Access to all group fitness classes",
        "Personalized workout plan",
        "Access to sauna and steam room (limited hours)",
        "Discounts on personal training sessions",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$80/month",
      features: [
        "Access to all equipment in Standard Membership",
        "Unlimited access to sauna and steam room",
        "Access to personal trainer sessions",
        "Free gym merchandise upon signup",
        "Priority booking for group fitness classes",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center font-bold underline py-2">
        Best Prices in the town
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6  py-2 md:m-6">
        {membershipOptions.map((price) => (
          <SinglePrice key={price.id} option={price}></SinglePrice>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
