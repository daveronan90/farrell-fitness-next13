"use client";

import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { use, useState } from "react";
import TextLogo from "./FFTextLogo";

type Heading = {
  name: String;
  url: String;
};

const headings: Heading[] = [
  {
    name: "home",
    url: "",
  },
  {
    name: "membership",
    url: "pricing",
  },
  {
    name: "classes",
    url: "classes",
  },
  {
    name: "services",
    url: "services",
  },
  {
    name: "results",
    url: "results",
  },
  { name: "team", url: "team" },
  { name: "gear", url: "merch" },
];

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="flex items-center justify-between my-4 lg:my-8">
      <a className="relative z-50" href="/">
        <TextLogo />
      </a>
      <div onClick={() => setToggled(!toggled)} className="lg:hidden">
        <div className="relative z-50 mr-2">
          <Hamburger toggled={toggled} toggle={setToggled} size={20} />
        </div>
        {toggled && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-orange-600"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-12">
              {headings.map(({ name, url }, index) => (
                <a
                  className="hover:text-orange-800"
                  href={`/${url}`}
                  key={index}
                >
                  {name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      <div className="lg:flex hidden w-full justify-end items-center relative z-20 space-x-6">
        {headings.map(({ name, url }, index) => (
          <a className="hover:text-orange-800" href={`/${url}`} key={index}>
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
