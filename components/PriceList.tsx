"use client";

import { getGoogleSheetsData } from "@/utils/googleSheets";
import { defaultPriceList } from "@/utils/pricingData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const PriceListItem = ({
  desc,
  duration,
  price,
}: {
  desc: string;
  duration: string;
  price: string;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="ml-2 flex font-normal md:ml-4"
  >
    <div className="py-3">{desc}</div>
    <div className="flex-grow px-2 py-3 md:px-12">
      {duration !== "null" && duration}
    </div>
    <div className="py-3">{price !== "0" && `€${price}`}</div>
  </motion.div>
);
export default function PriceList() {
  const [priceList, setPriceList] = useState(defaultPriceList);

  useEffect(() => {
    getGoogleSheetsData("PriceList", setPriceList);
  }, []);

  return priceList.length <= 1 ? (
    <div className="flex flex-col md:space-y-4 md:my-12 py-6">
      {new Array(4).fill("x").map((a, indexH) => (
        <>
          <Skeleton
            key={indexH}
            className="animate-pulse w-1/3 h-4 md:h-10 md:my-6"
          />
          {new Array(4).fill("x").map((_, index) => (
            <Skeleton
              key={index}
              className="animate-pulse w-11/12 ml-4 h-2 md:h-4"
            />
          ))}
        </>
      ))}
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="text-xxs md:text-base"
    >
      <div className="font-light">
        {priceList.map(({ category, services }) => (
          <div key={category} className="w-full">
            <div>
              <div className="py-4 text-base font-medium md:text-2xl">
                {category}
              </div>
            </div>
            {services.map(({ desc, duration, price }) => (
              <PriceListItem
                key={desc + duration}
                desc={desc}
                duration={duration}
                price={price}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
