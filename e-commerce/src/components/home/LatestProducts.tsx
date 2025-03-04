import { useState } from "react";
import { Link } from "react-router-dom";
import { defaultProducts } from "../../data/products";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
};

type LatestProductsProps = {
  products?: Product[];
};

export default function LatestProducts({
  products = defaultProducts,
}: LatestProductsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "T-Shirt", "Shirt", "Accessories", "Footwear"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="bg-black mx-auto px-4 py-12 w-full">
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-4 mx-12 mb-10">
        <h2 className="font-bold text-[#FFB22C] text-xl sm:text-3xl">
          Our Latest Products
        </h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#FFB22C]  text-black text-semibold"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product here */}
      <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-12">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 shadow-sm hover:shadow-md rounded-xl overflow-hidden transition-shadow"
          >
            <div className="relative px-4 py-4 w-full h-65">
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="border border-slate-200 rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-center px-4 py-2">
              <h3 className="font-medium text-gray-900 text-md">
                {product.name}
              </h3>
              <p className="font-semibold text-md">
                ${product.price.toFixed(2)} USD
              </p>
            </div>
            <div className="p-2">
              <Link
                to={`/product/${product.id}`}
                className="block bg-black hover:bg-[#FFB22C] mx-1 mb-2 py-2 rounded-md text-[#FFB22C] text-semibold hover:text-black text-center transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
