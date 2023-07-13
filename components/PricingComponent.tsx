import React from "react";

const offers = [
  {
    title: "Classes + Gym",
    subTitle: "1 Month",
    price: "90",
    services: ["Open Gym", "Expert-led sessions", "Engaging groups"],
  },
  {
    title: "Gym",
    subTitle: "1 year",
    price: "549",
    services: ["Flexible hours", "Diverse equipment", "Spacious environment"],
  },
  {
    title: "Gym + Program",
    subTitle: "3 Months",
    price: "345",
    services: ["Gym Access", "Personal coaching", "Tailored workouts"],
  },
];

export default function PricingComponent() {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      {offers.map(({ title, subTitle, price, services }, index) => (
        <div
          key={index}
          className={`${
            index === 1 ? "border-orange-600" : "border-gray-400"
          } w-full border rounded-lg py-6 px-6 text-gray-400 space-y-4 relative`}
          data-aos="fade"
        >
          <div
            className={`${
              index !== 1 && "hidden"
            } absolute top-0 right-0 p-2 bg-orange-600 text-white rounded font-bold`}
          >
            popular
          </div>

          <h3 className="md:text-base text-sm font-light">{subTitle}</h3>
          <h1 className="text-3xl">{title}</h1>
          <h3 className="md:text-2xl text-sm font-bold text-white">
            € {price}
          </h3>
          <div
            className={`${
              index === 1 ? "bg-orange-600" : "bg-gray-400"
            } h-[0.1rem] w-full rounded`}
          />
          <ul className="md:text-base text-sm font-light pb-10 space-y-2">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <li>{service}</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ))}
          </ul>
          <a href="https://legitfit.com/authenticate/signup/FarrellFitness">
            <div
              className={`${
                index === 1
                  ? "bg-orange-600 hover:bg-orange-800"
                  : "bg-gray-400 hover:bg-gray-800"
              } text-gray-200 px-3 py-2 rounded font-bold cursor-pointer`}
            >
              Sign Up!
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
