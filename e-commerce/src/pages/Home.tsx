import Hero from "../components/home/Hero";
import CategoryNav from "../components/home/CategoryNav";
import LatestProducts from "../components/home/LatestProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryNav />
      <LatestProducts />
    </div>
  );
};

export default Home;
