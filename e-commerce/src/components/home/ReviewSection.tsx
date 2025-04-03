import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const reviews = [
  {
    text: "I had the pleasure of working with the exceptional team at Regal Realty, they exceeded all my expectations. From the moment I stepped into their office.",
    name: "Christian Cooper",
    role: "Designer Manager",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    name: "James Pendragon",
    role: "Operations Manager",
  },
  {
    text: "Amazing service! The team was professional and delivered more than what I expected. Highly recommended!",
    name: "Sophia Carter",
    role: "Marketing Lead",
  },
  {
    text: "Absolutely fantastic experience! The quality of service was beyond my expectations.",
    name: "Michael Reynolds",
    role: "Product Manager",
  },
];

const ReviewSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black py-10 w-full overflow-hidden text-center">
      <h2 className="mb-8 font-semibold text-[#FFB22C] text-4xl">
        What our client say
      </h2>
      <div className="relative flex justify-center w-full">
        <div className="w-full max-w-4xl overflow-hidden">
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "0%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="flex justify-center gap-10"
          >
            {[0, 1].map((offset) => {
              const reviewIndex = (index + offset) % reviews.length;
              const review = reviews[reviewIndex];

              return (
                <motion.div
                  key={reviewIndex}
                  className="bg-[#090909] shadow-md p-6 rounded-sm h-[300px]"
                >
                  <div className="flex justify-center mb-4 ]">
                    <div className="flex justify-center items-center bg-[#FFB22C] rounded-full w-14 h-14 font-bold text-black text-xl">
                      66
                    </div>
                  </div>
                  <p className="text-[#FFB22C] italic">"{review.text}"</p>
                  <h3 className="mt-4 font-semibold text-[#f8bf5c] text-lg">
                    {review.name}
                  </h3>
                  <p className="text-[#f8bf5c] text-sm">{review.role}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
