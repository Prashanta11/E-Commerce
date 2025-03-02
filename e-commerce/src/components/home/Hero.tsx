import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.avif')",
          backgroundPosition: "center 20%",
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="relative flex items-center mx-auto px-24 h-full">
        <div className="w-full">
          <h1 className="font-light text-black hover:text-white text-5xl md:text-6xl lg:text-7xl tracking-tight">
            ELEGANCE IS
            <br />
            <span className="font-bold text-6xl md:text-7xl lg:text-8xl">
              ALWAYS
            </span>
            <br />
            IN STYLE
          </h1>
          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-block bg-black hover:bg-white px-8 py-3 rounded-md font-bold text-[#FFB22C] hover:text-black transition-colors"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
