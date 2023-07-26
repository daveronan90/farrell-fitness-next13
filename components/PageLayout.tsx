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
      <div className="flex flex-wrap items-center w-full md:mb-20 mb-10">
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <h1
            className="md:text-5xl text-3xl mb-2 font-black tracking-widest text-transparent shadow-primary italic"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "var(--tw-shadow-color)",
            }}
          >
            {title}
          </h1>
        </div>
        <p className="md:w-2/3 w-full md:pl-6">{summary}</p>
      </div>
      {children}
    </div>
  );
}
