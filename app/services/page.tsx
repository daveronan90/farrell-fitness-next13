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
            <div key={index} className="p-4 md:w-1/3">
              <div className="p-6 rounded-lg bg-secondary-900">
                <Image
                  width={300}
                  height={200}
                  className="object-cover object-center w-full h-40 mb-6 rounded"
                  src={url}
                  alt="content"
                />
                <h3 className="text-xs font-medium text-primary">{subTitle}</h3>
                <h2 className="mb-4 text-lg font-medium">{title}</h2>
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
