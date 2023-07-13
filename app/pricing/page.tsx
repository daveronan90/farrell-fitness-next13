import PageHeader from "@/components/PageHeader";
import { getSheetsData } from "@/utils/googleSheets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
};

const defaultPriceList = [
  {
    category: "classes",
    service: [
      { desc: "8 classes", duration: "1 month", price: "TBD" },
      { desc: "12 classes", duration: "1 month", price: "TBD" },
      { desc: "classes & gym", duration: "1 month", price: "TBD" },
      { desc: "class", duration: "1 day", price: "TBD" },
    ],
  },
  {
    category: "open gym",
    service: [
      { desc: "gym", duration: "1 month", price: "TBD" },
      { desc: "gym", duration: "3 months", price: "TBD" },
      { desc: "gym", duration: "6 months", price: "TBD" },
      { desc: "gym", duration: "1 year", price: "TBD" },
      { desc: "gym", duration: "1 day", price: "TBD" },
      { desc: "gym", duration: "1 week", price: "TBD" },
      { desc: "gym (student)", duration: "1 month", price: "TBD" },
      { desc: "gym (student)", duration: "3 months", price: "TBD" },
      { desc: "gym (student)", duration: "6 months", price: "TBD" },
      { desc: "gym (student)", duration: "1 year", price: "TBD" },
    ],
  },
  {
    category: "personal training",
    service: [
      { desc: "personal training", duration: "1 session", price: "TBD" },
      {
        desc: "personal training 1 week",
        duration: "2 sessions",
        price: "TBD",
      },
      {
        desc: "personal training 5 week block",
        duration: "10 sessions",
        price: "TBD",
      },
      {
        desc: "semi personal training 2 people",
        duration: "1 session",
        price: "TBD",
      },
    ],
  },
  {
    category: "gym & programming",
    service: [
      { desc: "gym & program", duration: "1 month", price: "TBD" },
      { desc: "gym & program", duration: "3 months", price: "TBD" },
      {
        desc: "consulation",
        duration: "body scan mobility screen strength test",
        price: "TBD",
      },
    ],
  },
  {
    category: "sports message",
    service: [
      { desc: "sports massage (non member)", duration: "", price: "TBD" },
      { desc: "sports massage (member)", duration: "", price: "TBD" },
    ],
  },
  {
    category: "styku 3d body scan",
    service: [
      { desc: "styku body scan", duration: "", price: "TBD" },
      { desc: "styku body scan (student)", duration: "", price: "TBD" },
    ],
  },
  {
    category: "pt & gym program",
    service: [
      { desc: "personal training", duration: "5 sessions", price: "TBD" },
      { desc: "gym", duration: "3 months", price: "TBD" },
      { desc: "program", duration: "3 months", price: "TBD" },
      { desc: "", duration: "Total", price: "TBD" },
    ],
  },
];

const getData = async () => {
  const data = await getSheetsData("PriceList");

  if (data) {
    const headers = await data[0];
    const result = await data.slice(1).reduce((acc, row) => {
      const [category, ...serviceProps] = row;
      const existingCategory = acc.find((item) => item.category === category);
      if (existingCategory) {
        existingCategory.service.push(
          Object.fromEntries(
            headers
              .slice(1)
              .map((header, index) => [header, serviceProps[index]])
          )
        );
      } else {
        acc.push({
          category,
          service: [
            Object.fromEntries(
              headers
                .slice(1)
                .map((header, index) => [header, serviceProps[index]])
            ),
          ],
        });
      }
      return acc;
    }, []);
    return result;
  }
  return defaultPriceList;
};

export default async function Page() {
  const priceList = await getData();

  return (
    <>
      <PageHeader
        title="Price List"
        summary="Explore our affordable price listing for a wide range of services and memberships at Farrell Fitness. From open gym access to personalized training programs, achieve your fitness goals without breaking the bank. Join us and start your fitness journey today!"
        videoPath="/videos/mainVideo.webm"
      />
      <div className="mx-auto w-full overflow-auto">
        <div className="whitespace-no-wrap w-full text-center text-xxs md:text-base">
          <div className="text-left font-light">
            {priceList.map(({ category, service }, index) => (
              <div key={index}>
                <div>
                  <div className="py-4 text-left text-base md:text-2xl font-medium">
                    {category}
                  </div>
                </div>
                {service.map(
                  (
                    {
                      desc,
                      duration,
                      price,
                    }: { desc: string; duration: string; price: string },
                    index: number
                  ) => (
                    <div key={index} className="flex w-full">
                      <div className="w-1/2 px-4 py-3 font-normal text-start">
                        {desc}
                      </div>
                      <div className="w-1/2 flex justify-end">
                        <div className="px-4 py-3 font-normal text-end">
                          {duration}
                        </div>
                        <div className="px-4 py-3 font-normal text-end">
                          €{price}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 flex w-full pl-4">
        <a
          href="https://legitfit.com/authenticate/signup/FarrellFitness"
          className="ml-auto flex rounded border-0 bg-orange-600 px-6 py-2 text-white hover:bg-orange-900 focus:outline-none"
        >
          Sign up
        </a>
      </div>
    </>
  );
}
