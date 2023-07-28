interface VideoPlayerProps {
  videoPath: string;
}

export default function VideoPlayer({ videoPath }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 overflow-hidden -z-30">
      <div className="absolute inset-0 opacity-75 bg-secondary-950" />
      <video
        className="object-cover w-full h-full"
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
