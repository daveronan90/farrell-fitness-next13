"use client";

import { motion } from "framer-motion";

type Cell = string | null;
type Row = Cell[];
type Timetable = Row[];

const Cell = ({
  cell,
  cIdx,
  rIdx,
}: {
  cell: Cell;
  cIdx: number;
  rIdx: number;
}) => (
  <div
    className={`flex items-center justify-center px-4 py-2 md:py-4 ${
      cIdx === 0 && "text-xxs text-primary md:text-base "
    }
            ${
              rIdx === 0 &&
              cIdx !== 0 &&
              "border-primary bg-primary text-xxs md:text-base"
            }
            ${rIdx !== 0 && rIdx % 2 === 0 && "bg-secondary-800 "}
            ${cell !== null && rIdx !== 0 && cIdx !== 0 && ""}
            `}
  >
    {cell !== "null" && cell}
  </div>
);
const RowComponent = ({ row, rIdx }: { row: Row; rIdx: number }) => (
  <div className={`grid grid-cols-8 gap-[0.1rem] divide-x-2 divide-y-2`}>
    {row.map((cell, cIdx) => (
      <Cell key={cIdx} cell={cell} rIdx={rIdx} cIdx={cIdx} />
    ))}
  </div>
);

export default function ClassTimetable({ classes }: { classes: Timetable }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-start justify-center w-full mb-12 md:mb-24"
    >
      <div className="flex flex-col mb-3 space-y-1 text-2xl md:mb-6 md:text-3xl">
        <h1>summer timetable</h1>
        <h2 className="text-xs text-secondary-500 md:text-base">
          may 29 to 3 september
        </h2>
      </div>
      <div className="grid w-full font-black text-center whitespace-normal grid-rows-9 text-xxxs md:text-sm">
        {classes.map((row, rIdx) => (
          <RowComponent key={rIdx} row={row} rIdx={rIdx} />
        ))}
      </div>
    </motion.div>
  );
}
