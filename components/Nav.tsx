"use client";

import { headings } from "@/utils/NavLinks";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import TextLogo from "./FFTextLogo";
import Link from "next/link";

export default function Nav() {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="my-4 flex items-center justify-between lg:my-8">
      <Link className="relative z-50" href="/">
        <TextLogo />
      </Link>
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
                <Link
                  className="hover:text-primary-800"
                  href={`/${url}`}
                  key={index}
                >
                  {name}
                </Link>
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
