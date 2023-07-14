import { google } from "googleapis";

export async function getSheetsData(sheet: string) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.private_key,
        client_email: process.env.client_email,
      },
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets("v4");

    const spreadsheetId = "1bjpOYpzhdxrayasCMIpFw6hvTsX4s6LWNDuQWzUxg54";

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: sheet,
    });
    return getRows.data.values;
  } catch (error) {
    console.error(error);
    return;
  }
}
