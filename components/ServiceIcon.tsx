"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="flex flex-col items-center justify-center w-1/2 p-4 space-y-4 text-center text-secondary-500 hover:cursor-pointer hover:text-primary lg:w-1/4"
      onClick={() => setToggle((prev) => !prev)}
    >
      <Image
        width={400}
        height={400}
        src={`/icons/${icon}.svg`}
        alt={icon}
        className="h-24"
      />
      <div className="">{description}</div>
      {toggle && (
        <motion.div
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <Image width={400} height={400} src={url} alt="image" />
        </motion.div>
      )}
    </li>
  );
}
