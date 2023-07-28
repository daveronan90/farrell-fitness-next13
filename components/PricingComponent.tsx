import { offers } from "@/utils/OffersData";

export default function PricingComponent() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {offers.map(({ title, subTitle, price, benefits }, index) => (
        <div
          key={index}
          className={`${
            index === 1 ? "border-primary" : "border-secondary-400"
          } group relative w-full space-y-4 rounded-lg border px-6 py-6 text-secondary-400`}
        >
          <div
            className={`${
              index !== 1 && "hidden"
            } absolute right-0 top-0 rounded bg-primary p-2 font-bold text-secondary`}
          >
            popular
          </div>

          <h3 className="text-sm font-light md:text-base">{subTitle}</h3>
          <h1 className="text-3xl">{title}</h1>
          <h3 className="text-sm font-bold text-secondary md:text-2xl">
            € {price}
          </h3>
          <div
            className={`${
              index === 1 ? "bg-primary" : "bg-secondary-400"
            } h-[0.1rem] w-full rounded`}
          />
          <ul className="pb-10 space-y-2 text-sm font-light md:text-base">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <li>{benefit}</li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ))}
          </ul>
          <a href="https://legitfit.com/authenticate/signup/FarrellFitness">
            <div
              className={`${
                index === 1
                  ? "bg-primary hover:bg-primary-800"
                  : "bg-secondary-400 hover:bg-secondary-800"
              } cursor-pointer rounded px-3 py-2 font-bold text-secondary`}
            >
              Sign Up!
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
