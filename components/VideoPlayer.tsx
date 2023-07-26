interface VideoPlayerProps {
  videoPath: string;
}

export default function VideoPlayer({ videoPath }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden">
      <div className="absolute inset-0 bg-secondary-950 opacity-75" />
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
