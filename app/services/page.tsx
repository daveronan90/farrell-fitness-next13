import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

type Service = {
  title: string;
  subTitle: string;
  excerpt: string;
  url: string;
};

const services: Service[] = [
  {
    title: "physical therapy",
    subTitle: "deep tissue",
    excerpt:
      "Tailored treatments for rehabilitation and improved mobility, led by our skilled professionals.",
    url: "https://images.pexels.com/photos/5794048/pexels-photo-5794048.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "3d scan",
    subTitle: "styku",
    excerpt:
      "Gain detailed body composition insights using cutting-edge technology for accurate assessments.",
    url: "https://pinkgym.com/wp-content/uploads/2020/11/Styku-002-jpg.webp",
  },
  {
    title: "cupping",
    subTitle: "circulation",
    excerpt:
      "Therapeutic modality to improve circulation, reduce pain, and enhance overall physical health.",
    url: "https://images.pexels.com/photos/8312830/pexels-photo-8312830.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "body recomposition",
    subTitle: "individualized",
    excerpt:
      "Personalized plans designed to help you reshape your body and achieve your fitness goals.",
    url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhaW5pbmclMjBwbGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
  },
  {
    title: "trackman",
    subTitle: "golf simulation",
    excerpt:
      "Take your golf game to the next level with realistic simulation and data-driven analysis for improved performance.",
    url: "https://www.eighteenunderpar.com/wp-content/uploads/2014/12/trackman-1-1024x682.jpg",
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        videoPath="/videos/ptVideo.mp4"
        title="Advanced Body Care Solutions"
        summary="Transform with tailored physical therapy, 3D body scanning, dry needling, cupping for relaxation, improved circulation, and holistic wellness."
      />
      <div className="flex flex-wrap -m-4">
        {services.map(({ title, subTitle, excerpt, url }, index) => (
          <div key={index} className="md:w-1/3 p-4">
            <div className="bg-gray-900 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src={url}
                alt="content"
              />
              <h3 className="text-orange-600 text-xs font-medium">
                {subTitle}
              </h3>
              <h2 className="text-lg font-medium mb-4">{title}</h2>
              <p className="text-sm">{excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
