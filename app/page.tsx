import PricingComponent from "@/components/PricingComponent";
import ServiceIcon from "@/components/ServiceIcon";
import VideoPlayer from "@/components/VideoPlayer";
import FFLogo from "@/components/FFLogo";
import Image from "next/image";

interface service {
  icon: string;
  description: string;
  url: string;
}

const services: service[] = [
  {
    url: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "bench",
    description: "4,000 kg weights",
  },
  {
    url: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "cardio",
    description: "+28 cardio equipment",
  },
  {
    url: "https://images.pexels.com/photos/5938382/pexels-photo-5938382.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "clean",
    description: "sanitation",
  },
  {
    url: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "college",
    description: "professional staff",
  },
  {
    url: "https://images.pexels.com/photos/4608173/pexels-photo-4608173.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "gymequip",
    description: "+20 weight machines",
  },
  {
    url: "https://images.pexels.com/photos/5878699/pexels-photo-5878699.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "kcal",
    description: "personalized programs",
  },
  {
    url: "https://images.pexels.com/photos/4162587/pexels-photo-4162587.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "locker",
    description: "lockers",
  },
  {
    url: "https://images.pexels.com/photos/5473186/pexels-photo-5473186.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "massage",
    description: "sports massage",
  },
  {
    url: "https://images.pexels.com/photos/3143085/pexels-photo-3143085.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "measure",
    description: "measureable results",
  },
  {
    url: "https://images.pexels.com/photos/5000222/pexels-photo-5000222.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "privacy",
    description: "changing rooms",
  },
  {
    url: "https://images.pexels.com/photos/9155214/pexels-photo-9155214.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "shower",
    description: "private showers",
  },
  {
    url: "https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=400",
    icon: "waist",
    description: "full body conditioning",
  },
];

export default function Home() {
  return (
    <>
      <VideoPlayer videoPath="/videos/OpenGym.webm" />
      <FFLogo />
      <div>
        <h1 className="md:text-8xl text-4xl font-black text-center flex flex-col">
          <span className="leading-snug tracking-tight">sign up to</span>
          <a
            href="https://legitfit.com/authenticate/signup/FarrellFitness"
            className="text-orange-600 hover:text-orange-800 hover:cursor-pointer leading-snug tracking-tight"
          >
            farrell fitness
          </a>
          <span className="leading-snug tracking-tight">now</span>
        </h1>
      </div>
      <h1 className="md:text-8xl text-4xl text-center leading-snug tracking-tight font-black">
        Opening Hours
      </h1>
      <div className="md:space-y-8 space-y-4 text-sm">
        <p className="flex justify-between items-center w-full md:text-4xl">
          <span>Monday - Friday</span>
          <span className="bg-orange-600 px-2 py-1">6:00am - 9:30pm</span>
        </p>
        <p className="flex justify-between w-full md:text-4xl">
          <span>Saturday - Sunday</span>
          <span className="bg-orange-600 px-2 py-1">8:00am - 4:00pm</span>
        </p>
      </div>
      <PricingComponent />
      <ul className="flex flex-wrap">
        {services.map(({ icon, description, url }, index) => (
          <ServiceIcon
            key={index}
            icon={icon}
            description={description}
            url={url}
          />
        ))}
      </ul>

      <section className="relative">
        <div className="mx-auto flex sm:flex-nowrap flex-wrap space-y-12 md:space-y-0">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative -mx-6 md:ml-0">
            <iframe
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.109383345706!2d-6.931858084197501!3d52.38656737978914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4842b6b899f0bce7%3A0x68eb6b7c600b3055!2sFarrell%20Fitness!5e0!3m2!1sen!2sie!4v1687610160865!5m2!1sen!2sie"
              width="100%"
              height="100%"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md text-gray-950">
              <div className="lg:w-1/2 px-6">
                <h2 className="font-semibold text-xs">
                  Farrell Fitness 27, Woodbine Business Park, New Ross, Co.
                  Wexford
                </h2>
                <p className="mt-1">Gym & Fitness Center</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-xs pr-4">EMAIL</h2>
                <a className="text-orange-600 md:text-xs text-xxs">
                  info.farrellfitness
                  <br className="hidden md:block" />
                  @gmail.com
                </a>
                <h2 className="font-semibold text-xs mt-4">Phone</h2>
                <p className="">087 775 9716</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 md:mt-0">
            <h2 className="text-lg mb-1 font-medium text-orange-600">
              Contact us
            </h2>
            <p className="mb-">
              to find out more about what we have to offer and how we can help
              you start your fitness journey
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none py-1 px-3 transition-colors duration-200 ease-in-out text-gray-900"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none py-1 px-3 transition-colors duration-200 ease-in-out text-gray-900"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none py-1 px-3 resize-none transition-colors duration-200 ease-in-out text-gray-900"
              ></textarea>
            </div>
            <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded text-lg">
              Send message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
