"use client";

import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import TextLogo from "./FFTextLogo";
import { headings } from "@/utils/NavLinks";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="my-4 flex items-center justify-between lg:my-8">
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
            className="fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-primary"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-12">
              {headings.map(({ name, url }, index) => (
                <a
                  className="hover:text-primary-800"
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
      <div className="relative z-20 hidden w-full items-center justify-end space-x-6 lg:flex">
        {headings.map(({ name, url }, index) => (
          <a className="hover:text-primary-800" href={`/${url}`} key={index}>
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
}
