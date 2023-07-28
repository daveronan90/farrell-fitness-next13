import ClassTimetable from "@/components/ClassTimetable";
import PageLayout from "@/components/PageLayout";
import { highlightClasses } from "@/utils/highlightClassesData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Classes",
};

export default function Page() {
  return (
    <>
      <PageLayout
        title="classes & team training"
        summary="Build muscle, improve movement patterns in our team-based strength and conditioning classes. Get expert guidance and form correction from our coaches."
        videoPath="/videos/classesVideo.mp4"
      >
        <ClassTimetable />

        <div className="flex flex-wrap">
          {highlightClasses.map(({ title, excerpt, url }, index) => (
            <div key={index} className="p-4 mb-6 md:w-1/3 sm:mb-0">
              <div className="h-64 overflow-hidden rounded-lg">
                <Image
                  width={900}
                  height={600}
                  alt="content"
                  className="object-cover object-center w-full h-full"
                  src={url}
                />
              </div>
              <h2 className="mt-5 text-lg font-bold text-primary">{title}</h2>
              <p className="mt-2 text-sm">{excerpt}</p>
              <a
                href="https://legitfit.com/authenticate/signup/FarrellFitness"
                className="inline-flex items-center mt-3 text-primary hover:text-primary-800"
              >
                sign up
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
