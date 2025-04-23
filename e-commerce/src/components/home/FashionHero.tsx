import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";

interface FashionHeroProps {
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const FashionHero: React.FC<FashionHeroProps> = ({
  heading = "Effortless style for everyday wear",
  description = "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.",
  buttonText = "Shop now",
  buttonLink = "#",
  imageSrc = "/images/FashionHero.avif",
  imageAlt = "Fashion models in stylish outfits",
}) => {
  return (
    <section className="bg-black w-full">
      <div className="items-center grid grid-cols-1 md:grid-cols-2 mx-auto py-8 md:py-14">
        <div className="flex flex-col justify-center space-y-6 bg-[#FFB22C] md:px-12 h-full md:text-left text-center">
          <h1 className="font-extrabold text-black text-3xl md:text-4xl lg:text-5xl leading-tight">
            {heading}
          </h1>
          <p className="max-w-xl text-black text-lg">{description}</p>
          <Link to={buttonLink} className="block">
            <Button className="rounded-md"> {buttonText} </Button>
          </Link>
        </div>

        <div className="relative shadow-lg w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-center object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FashionHero;
