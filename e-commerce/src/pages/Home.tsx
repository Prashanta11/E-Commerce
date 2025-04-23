import Hero from "../components/home/Hero";
import CategoryNav from "../components/home/CategoryNav";
import LatestProducts from "../components/home/LatestProducts";
import FashionHero from "../components/home/FashionHero";
import ImageCarousel from "../components/home/ImageCarousel";
import ReviewSection from "../components/home/ReviewSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryNav />
      <LatestProducts />
      <FashionHero />
      <ReviewSection />
      <ImageCarousel />
    </div>
  );
};

export default Home;
