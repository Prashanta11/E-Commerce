import Hero from "../components/home/Hero";
import CategoryNav from "../components/home/CategoryNav";
import LatestProducts from "../components/home/LatestProducts";
import FashionHero from "../components/home/FashionHero";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryNav />
      <LatestProducts />
      <FashionHero />
    </div>
  );
};

export default Home;
