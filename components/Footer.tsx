import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-6 md:mt-16">
      <div className="flex flex-col items-center sm:flex-row">
        <Image
          width={400}
          height={400}
          src="/images/LogoCycles.webp"
          alt="Logo"
          className="w-2/6 md:w-1/12"
        />
        <span className="ml-3 text-xl">Farrell Fitness</span>
        <p className="mt-4 text-sm sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-secondary sm:py-2 sm:pl-4">
          {currentYear}© —
          <a
            href="mailto:daveronan90@gmail.com"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            daveronan90@gmail.com
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://www.facebook.com/farrellfitness17/">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5 hover:fill-primary"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/farrellfitness17/"
            className="ml-3"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-5 w-5 hover:stroke-primary"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            href="https://ie.linkedin.com/in/robbie-farrell-43546876"
            className="ml-3"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="h-5 w-5 hover:fill-primary"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  );
}
