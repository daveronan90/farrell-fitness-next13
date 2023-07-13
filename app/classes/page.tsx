import ClassTimetable from "@/components/ClassTimetable";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes",
};

type Class = {
  title: string;
  excerpt: string;
  url: string;
};

const classes: Class[] = [
  {
    title: "classes and team training",
    excerpt:
      "Build muscle, improve movement patterns in our team-based strength and conditioning classes. Get expert guidance and form correction from our coaches. Join us today for a fitter you!",
    url: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&",
  },
  {
    title: "strength classes",
    excerpt:
      "Gain raw strength and muscle mass in our dedicated Strength Only class. Target major muscle groups with compound exercises like squats, deadlifts, and bench presses, guided by knowledgeable trainers for proper technique and results.",
    url: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "sports team training",
    excerpt:
      "Maximize performance with our customized Team Training program. Our experienced coaches tailor sessions to your sport, combining sport-specific drills, strength training, and teamwork challenges for peak on-field performance. Unleash your team's full potential!",
    url: "https://images.pexels.com/photos/3856026/pexels-photo-3856026.jpeg?auto=compress&cs=tinysrgb",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        title="classes & team training"
        summary="Build muscle, improve movement patterns in our team-based strength and conditioning classes. Get expert guidance and form correction from our coaches."
        videoPath="/videos/classesVideo.mp4"
      />
      <ClassTimetable />
      <div className="flex flex-wrap">
        {classes.map(({ title, excerpt, url }, index) => (
          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={url}
              />
            </div>
            <h2 className="mt-5 text-lg font-bold text-orange-600">{title}</h2>
            <p className="text-sm mt-2">{excerpt}</p>
            <a
              href="https://legitfit.com/authenticate/signup/FarrellFitness"
              className="text-orange-600 inline-flex items-center mt-3 hover:text-orange-800"
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
    </>
  );
}
