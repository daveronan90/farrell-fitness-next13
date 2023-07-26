import PageLayout from "@/components/PageLayout";
import { team } from "@/utils/teamData";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
};

export default function Page() {
  return (
    <>
      <PageLayout
        title="meet our team"
        summary="Meet the dynamic team at Farrell Fitness, a group of fitness professionals committed to transforming lives. From experienced trainers and coaches to knowledgeable staff, we are here to guide and support you on your fitness journey."
        videoPath="/videos/oldMainVideo.mp4"
      >
        <div className="flex flex-wrap text-base font-medium justify-center">
          {team.map(({ desc, name, position, url }, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full flex flex-col items-center text-center">
                <Image
                  width={450}
                  height={300}
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={url}
                />
                <div className="w-full">
                  <h2 className="font-semibold text-lg ">{name}</h2>
                  <h3 className="text-primary mb-3">{position}</h3>
                  <p className="mb-4 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
