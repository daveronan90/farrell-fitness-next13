'use client'

import { motion } from "framer-motion";
import { useState } from "react";

interface ServiceIconProps {
  icon: string;
  description: string;
  url: string;
}

export default function ServiceIcon({
  icon,
  description,
  url,
}: ServiceIconProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <li
      className="flex p-4 text-gray-500 space-y-4 flex-col justify-center items-center text-center w-1/2 lg:w-1/4 hover:text-orange-600 hover:cursor-pointer"
      onClick={() => setToggle((prev) => !prev)}
    >
      <img src={`/icons/${icon}.svg`} alt={icon} className="h-24" />
      <div className="">{description}</div>
      {toggle && (
        <motion.div
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          className="fixed z-50 inset-0 flex items-center justify-center"
        >
          <img src={url} alt="image" />
        </motion.div>
      )}
    </li>
  );
}
