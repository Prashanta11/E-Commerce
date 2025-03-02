import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import {
  Baby,
  ShoppingBag,
  Footprints,
  Percent,
  Star,
  Tag,
  Shirt,
  ShoppingCart,
} from "lucide-react";

const categories = [
  { name: "Kids", path: "/category/kids", icon: Baby },
  { name: "Accessories", path: "/category/accessories", icon: ShoppingBag },
  { name: "Footwear", path: "/category/footwear", icon: Footprints },
  { name: "Big Sale", path: "/sale", icon: Percent },
  { name: "New Collection", path: "/new-collection", icon: Star },
  { name: "30% Discount", path: "/discount", icon: Tag },
  { name: "Men", path: "/category/men", icon: Shirt },
  { name: "Women", path: "/category/women", icon: ShoppingCart },
];

const CategoryNav = () => {
  return (
    <div className="bg-black py-6 text-white">
      <div className="mx-auto px-4 container">
        <Splide
          options={{
            type: "loop",
            perPage: 6,
            perMove: 1,
            gap: "1rem",
            autoScroll: {
              speed: 2, // Adjust speed for smooth scrolling
            },
            autoplay: true,
            pauseOnHover: false,
            arrows: false,
            drag: "free",
            pagination: false,
          }}
          extensions={{ AutoScroll }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <SplideSlide key={index}>
                <Link
                  to={category.path}
                  className="flex justify-center items-center gap-2 bg-[#FFB22C] px-4 py-2 rounded-lg font-bold text-black hover:text-gray-300 text-center whitespace-nowrap transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
};

export default CategoryNav;
