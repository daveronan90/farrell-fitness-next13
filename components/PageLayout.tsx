import { ReactNode } from "react";
import VideoPlayer from "./VideoPlayer";

export default function PageLayout(props: {
  title: string;
  summary: string;
  videoPath: string;
  children: ReactNode;
}) {
  const { title, summary, videoPath, children } = props;
  return (
    <div>
      <VideoPlayer videoPath={videoPath} />
      <div className="flex flex-wrap items-center w-full mb-10 md:mb-20">
        <div className="w-full mb-6 md:w-1/3 md:mb-0">
          <h1
            className="mb-2 text-3xl italic font-black tracking-widest text-transparent md:text-5xl shadow-primary"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "var(--tw-shadow-color)",
            }}
          >
            {title}
          </h1>
        </div>
        <p className="w-full md:w-2/3 md:pl-6">{summary}</p>
      </div>
      {children}
    </div>
  );
}
