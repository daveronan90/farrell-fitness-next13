import PricingComponent from "@/components/PricingComponent";
import ServiceIcon from "@/components/ServiceIcon";
import VideoPlayer from "@/components/VideoPlayer";
import Logo from "@/public/images/LogoCycles.webp";
import { facilities } from "@/utils/facilitiesData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="Logo" priority />
      </div>
      <VideoPlayer videoPath="/videos/OpenGym.mp4" />
      <div>
        <h1 className="flex flex-col text-4xl font-black text-center md:text-8xl">
          <span className="leading-snug tracking-tight text-shadow">
            sign up to
          </span>
          <a
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="leading-snug tracking-tight text-primary hover:text-primary-800 hover:cursor-pointer"
          >
            farrell fitness
          </a>
          <span className="leading-snug tracking-tight text-shadow">now</span>
        </h1>
      </div>
      <h1 className="text-4xl font-black leading-snug tracking-tight text-center md:text-8xl">
        Opening Hours
      </h1>
      <div className="space-y-4 text-sm md:space-y-8">
        <p className="flex items-center justify-between w-full md:text-4xl">
          <span>Monday - Friday</span>
          <span className="px-2 py-1 bg-primary">6:00am - 9:30pm</span>
        </p>
        <p className="flex justify-between w-full md:text-4xl">
          <span>Saturday - Sunday</span>
          <span className="px-2 py-1 bg-primary">8:00am - 4:00pm</span>
        </p>
      </div>
      <PricingComponent />
      <ul className="flex flex-wrap">
        {facilities.map(({ icon, description, url }, index) => (
          <ServiceIcon
            key={index}
            icon={icon}
            description={description}
            url={url}
          />
        ))}
      </ul>
      <section className="relative flex items-center justify-center aspect-square">
        <div className="flex h-full space-y-12">
          <div className="relative flex items-end justify-start p-10 -mx-6 overflow-hidden bg-secondary-300 md:mx-0">
            <iframe
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.109383345706!2d-6.931858084197501!3d52.38656737978914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842b6b899f0bce7%3A0x68eb6b7c600b3055!2sFarrell%20Fitness!5e0!3m2!1sen!2sie!4v1687610160865!5m2!1sen!2sie"
              width="100%"
              height="100%"
            ></iframe>
            <div className="relative flex flex-wrap py-6 tracking-normal rounded shadow-md bg-secondary text-secondary-950">
              <div className="px-6 lg:w-1/2">
                <h2 className="">
                  Farrell Fitness 27, Woodbine Business Park, New Ross, Co.
                  Wexford
                </h2>
                <p className="mt-1 text-secondary-400">Gym & Fitness Center</p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="pr-4">EMAIL</h2>
                <a
                  href="mailto:info.farrellfitness@gmail.com"
                  className="text-primary"
                >
                  info.farrellfitness@gmail.com
                </a>
                <h2 className="mt-4">Phone</h2>
                <p>087 775 9716</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
