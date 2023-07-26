import Button from "@/components/Button";
import PageLayout from "@/components/PageLayout";
import { services } from "@/utils/servicesData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services",
};

export default function Page() {
  return (
    <>
      <PageLayout
        videoPath="/videos/ptVideo.mp4"
        title="Advanced Body Care Solutions"
        summary="Transform with tailored physical therapy, 3D body scanning, dry needling, cupping for relaxation, improved circulation, and holistic wellness."
      >
        <div className="flex flex-wrap -m-4">
          {services.map(({ title, subTitle, excerpt, url }, index) => (
            <div key={index} className="md:w-1/3 p-4">
              <div className="bg-secondary-900 p-6 rounded-lg">
                <Image
                  width={300}
                  height={200}
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={url}
                  alt="content"
                />
                <h3 className="text-primary text-xs font-medium">{subTitle}</h3>
                <h2 className="text-lg font-medium mb-4">{title}</h2>
                <p className="text-sm">{excerpt}</p>
                <Button text="Sign up" />
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
