"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Review {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

function reduceWords(string: string, limit: number) {
  const words = string.trim().split(" ");

  if (words.length <= limit) {
    return string;
  }

  const reducedWords = words.slice(0, limit);
  const reducedString = reducedWords.join(" ");

  return `${reducedString}...`;
}

const GoogleMapsReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <section className="my-12">
        <div className="">
          <div className="flex flex-wrap -m-4">
            {reviews.map((review, index) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                key={index}
                className="p-4 mb-6 lg:mb-0 lg:w-1/3"
              >
                <div className="h-full text-center">
                  <Image
                    width={400}
                    height={400}
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 mb-8 border-2 rounded-full border-primary-200 bg-primary-100"
                    src={review.profile_photo_url}
                  />
                  <a
                    href={review.author_url}
                    className="hover:text-primary-800"
                  >
                    <p className="text-sm leading-relaxed">
                      {reduceWords(review.text, 30)}
                    </p>
                  </a>
                  <span className="inline-block w-10 h-1 mt-6 mb-4 rounded bg-primary"></span>
                  <h2 className="text-sm font-bold tracking-wider title-font text-primary">
                    {review.author_name}
                  </h2>
                  <p className="flex items-center justify-center text-primary">
                    {Array.from({ length: review.rating }, () => 1).map(
                      (_, index) => (
                        <svg
                          key={index}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="gold"
                          width="24"
                          height="24"
                        >
                          <path d="M12 17.27l-6.16 3.75 1.64-7.14L2.34 9.12l7.19-.62L12 2l2.47 6.5 7.19.62-5.14 4.76 1.64 7.14L12 17.27z" />
                        </svg>
                      )
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleMapsReviews;
