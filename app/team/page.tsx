import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

interface Person {
  name: string;
  position: string;
  desc: string;
  url: string;
}

const team: Person[] = [
  {
    name: "Robbie",
    position: "Owner",
    desc: "Robbie, the owner of Farrell Fitness, is a passionate fitness enthusiast dedicated to transforming lives through health.",
    url: "/images/robbie.webp",
  },
  {
    name: "Cat",
    position: "Manager",
    desc: "Cat, the dedicated manager at Farrell Fitness, has been with the gym since its inception, overseeing operations with expertise.",
    url: "/images/cat.webp",
  },
  {
    name: "Eoghan",
    position: "Personal Trainer",
    desc: "Eoghan, a skilled CrossFit and mobility specialist, brings three years of experience to his training expertise.",
    url: "/images/eoghan.webp",
  },
  {
    name: "Paul",
    position: "Personal Trainer",
    desc: "Paul, a seasoned personal trainer at Farrell Fitness, has 4 years of experience in guiding clients to their fitness goals.",
    url: "/images/paul.webp",
  },
  {
    name: "James",
    position: "Jr. Personal Trainer",
    desc: "James, a junior personal trainer fresh out of college, brings enthusiasm and a passion for helping clients achieve their fitness goals.",
    url: "/images/james.webp",
  },
];

export default function Page() {
  return (
    <>
      {" "}
      <PageHeader
        title="meet our team"
        summary="Meet the dynamic team at Farrell Fitness, a group of fitness professionals committed to transforming lives. From experienced trainers and coaches to knowledgeable staff, we are here to guide and support you on your fitness journey."
        videoPath="/videos/oldMainVideo.mp4"
      />
      <div className="flex flex-wrap text-base font-medium justify-center">
        {team.map(({ desc, name, position, url }, index) => (
          <div key={index} className="p-4 lg:w-1/3">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src={url}
              />
              <div className="w-full">
                <h2 className="font-semibold text-lg ">{name}</h2>
                <h3 className="text-orange-600 mb-3">{position}</h3>
                <p className="mb-4 text-sm">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
