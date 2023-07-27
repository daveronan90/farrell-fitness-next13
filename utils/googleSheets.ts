import type { Timetable } from "./classesData";
import type { ServiceGroup } from "./pricingData";

interface EmptyObject {
  [key: string]: any;
}

function groupByCategory(array: string[]) {
  const grouped: EmptyObject | ServiceGroup = {};

  for (const item of array) {
    const [category, desc, duration, price] = item;

    if (!grouped[category]) {
      grouped[category] = {
        category,
        services: [],
      };
    }

    grouped[category].services.push({
      desc,
      duration,
      price,
    });
  }
  return Object.values(grouped);
}

export const getGoogleSheetsData = async (
  tableName: string,
  setState:
    | React.Dispatch<React.SetStateAction<Timetable>>
    | React.Dispatch<React.SetStateAction<ServiceGroup[]>>
) => {
  const API_KEY = process.env.NEXT_PUBLIC_PLACES_API_KEY;

  const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;

  const SHEET_NAME = tableName;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

  try {
    const res = await fetch(url);

    const data = await res.json();

    if (data.error) return;

    const spreadsheetArr = data.values;

    if (tableName === "PriceList") {
      spreadsheetArr.shift();
      const groupedSpreadsheetArr = groupByCategory(spreadsheetArr);

      setState(groupedSpreadsheetArr);
      return;
    }
    setState(spreadsheetArr);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
