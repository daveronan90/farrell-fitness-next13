import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merchandise",
};

const items = [
  {
    category: "Top's",
    title: "Hoody",
    price: "40.00",
    url: "/images/merch1.webp",
  },
  {
    category: "Top's",
    title: "Training Top",
    price: "30.00",
    url: "/images/merch2.webp",
  },
  {
    category: "Shirt's",
    title: "Polo",
    price: "15.00",
    url: "/images/merch3.webp",
  },
  {
    category: "Bags's",
    title: "Backpack",
    price: "20.00",
    url: "/images/merch4.webp",
  },
  {
    category: "Hat's",
    title: "Beanie",
    price: "10.00",
    url: "/images/merch5.webp",
  },
  {
    category: "Mask's",
    title: "Cottton Mask",
    price: "5.00",
    url: "/images/merch6.webp",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="Latest Gear"
        summary="Elevate Your Fitness Style: Shop our exclusive collection of Farrell Fitness merchandise and wear your passion for fitness with pride!"
        videoPath=""
      />
      <div className="flex flex-wrap -m-4">
        {items.map(({ title, category, price, url }, index) => (
          <div key={index} className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={url}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                {category}
              </h3>
              <h2 className="text-orange-600 text-lg font-medium">{title}</h2>
              <p className="mt-1">€{price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center items-start mt-12 md:mt-24">
        <h1 className="flex-grow sm:pr-16">
          Discover the perfect gear for your fitness journey. Visit our gym and
          inquire about purchasing any of these items. With limited stock
          available, seize the opportunity to look your best while pushing your
          limits.
        </h1>
        <div className="flex-shrink-0 text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none rounded mt-10 sm:mt-0 cursor-pointer hover:bg-orange-700">
          Shop Now
        </div>
      </div>
    </>
  );
}
