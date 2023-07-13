import { getSheetsData } from "@/utils/googleSheets";

const getData = async () => {
  const res = await getSheetsData("Timetable");
  return res;
};

type Cell = string | null;

type Row = Cell[];

type Timetable = Row[];

const defaultClasses: Timetable = [
  [null, "mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  ["6:15", null, null, null, null, null, null, null],
  ["7:00", null, null, null, null, null, null, null],
  ["9:30", null, null, null, null, null, null, null],
  ["9:45", null, null, null, null, null, null, null],
  ["10:45", null, null, null, null, null, null, null],
  ["16:15", null, null, null, null, null, null, null],
  ["17:30", null, null, null, null, null, null, null],
  ["18:45", null, null, null, null, null, null, null],
];

export default async function ClassTimetable() {
  const classes: Timetable = (await getData()) || defaultClasses;

  return (
    <div className="flex flex-col w-full justify-center items-start mb-12 md:mb-24">
      <div className="flex flex-col space-y-1 text-2xl md:text-3xl mb-3 md:mb-6">
        <h1>summer timetable</h1>
        <h2 className="text-xs md:text-base text-gray-500">
          may 29 to 3 september
        </h2>
      </div>
      <div className="grid grid-rows-9 text-center whitespace-normal md:text-sm text-xxxs w-full font-black">
        {classes.map((row, rIdx) => (
          <div key={rIdx} className={`grid grid-cols-8 gap-[0.1rem]`}>
            {row.map((cell, cIdx) => (
              <div
                key={cIdx}
                className={`flex items-center justify-center md:py-4 py-2 px-4 ${
                  cIdx === 0 && "text-orange-600 text-xxs md:text-base "
                }
            ${
              rIdx === 0 && cIdx !== 0 && "bg-orange-600 text-xxs md:text-base "
            }
            ${rIdx !== 0 && rIdx % 2 === 0 && "bg-gray-600 "}
            ${cell !== null && rIdx !== 0 && cIdx !== 0 && "border"}
            `}
              >
                {cell !== "null" && cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
