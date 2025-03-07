import { motion } from "framer-motion";

const images = [
  "/ImageCarousel/Bshoes.avif",
  "/ImageCarousel/cosmetics.avif",
  "/ImageCarousel/kids.avif",
  "/ImageCarousel/Lbags.avif",
  "/ImageCarousel/Lshoes.avif",
  "/ImageCarousel/Men.avif",
  "/ImageCarousel/sunglasses.avif",
  "/ImageCarousel/women copy.avif",
  "/ImageCarousel/kshoes.avif",
];

const ImageCarousel = () => {
  return (
    <div className="relative bg-[#FFB22C] py-14 w-full overflow-hidden">
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`carousel-${index}`}
            className="shadow-md rounded-xl w-auto h-80"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
