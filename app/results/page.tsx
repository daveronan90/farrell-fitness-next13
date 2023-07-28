import GoogleMapsReviews from "@/components/GoogleMapsReviews";
import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Results",
};

export default function Page() {
  function generateRandomIntegers() {
    const result = [];
    for (let i = 0; i <= 5; i++) {
      const randomInt = Math.floor(Math.random() * 37) + 1;
      result.push(randomInt);
    }
    return result;
  }

  let randomNumbers = generateRandomIntegers();
  return (
    <>
      <PageLayout
        title="results & reviews"
        summary="Experience member transformations, tangible results, and rave reviews at Farrell Fitness. Join our community for weight loss, strength gains, and athletic improvements."
        videoPath="/videos/teamVideo.mp4"
      >
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[0]}-min.webp`}
                priority
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[1]}-min.webp`}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[2]}-min.webp`}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[3]}-min.webp`}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[4]}-min.webp`}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                width={600}
                height={400}
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={`/images/transformation${randomNumbers[5]}-min.webp`}
              />
            </div>
          </div>
        </div>
      </PageLayout>
      <div className="w-full mt-12 mb-4 text-2xl text-center">
        Google Reviews
      </div>
      <div className="h-[0.1rem] bg-secondary relative">
        <div className="absolute w-1/2 h-full bg-primary"></div>
      </div>
      <GoogleMapsReviews />
    </>
  );
}
