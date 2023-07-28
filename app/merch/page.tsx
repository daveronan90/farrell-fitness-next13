import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { items } from "@/utils/merchandiseData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Merchandise",
};

export default function Page() {
  return (
    <>
      <PageLayout
        title="Latest Gear"
        summary="Elevate Your Fitness Style: Shop our exclusive collection of Farrell Fitness merchandise and wear your passion for fitness with pride!"
        videoPath=""
      >
        <div className="flex flex-wrap -m-4">
          {items.map(({ title, category, price, url }, index) => (
            <div key={index} className="w-full p-4 lg:w-1/3 md:w-1/2">
              <a className="relative block h-48 overflow-hidden rounded">
                <Image
                  width={300}
                  height={200}
                  alt="ecommerce"
                  className="block object-cover object-center w-full h-full"
                  src={url}
                  priority
                />
              </a>
              <div className="mt-4">
                <h3 className="mb-1 text-xs tracking-widest text-secondary-500 title-font">
                  {category}
                </h3>
                <h2 className="text-lg font-medium text-primary">{title}</h2>
                <p className="mt-1">€{price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start mt-12 sm:flex-row sm:items-center md:mt-24">
          <h1 className="flex-grow sm:pr-16">
            Discover the perfect gear for your fitness journey. Visit our gym
            and inquire about purchasing any of these items. With limited stock
            available, seize the opportunity to look your best while pushing
            your limits.
          </h1>
          <Button text="Shop now" />
        </div>
      </PageLayout>
    </>
  );
}
