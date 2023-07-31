import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import PriceList from "@/components/PriceList";
import { Metadata } from "next";

interface EmptyObject {
  [key: string]: any;
}

interface service {
  desc: string;
  duration: string;
  price: string;
}

interface ServiceGroup {
  category: string;
  services: service[];
}

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pricing",
};

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

export default async function Page() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.NEXT_PUBLIC_SHEET_ID}/values/PriceList?key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}`;
  const res = await fetch(url);
  const { values } = await res.json();

  values.shift();
  const priceList = groupByCategory(values);

  return (
    <>
      <PageLayout
        title="Price List"
        summary="Explore our affordable price listing for a wide range of services and memberships at Farrell Fitness. From open gym access to personalized training programs, achieve your fitness goals without breaking the bank. Join us and start your fitness journey today!"
        videoPath="/videos/mainVideo.webm"
      >
        <PriceList priceList={priceList} />
        <Button text="sign up" />
      </PageLayout>
    </>
  );
}
