import { RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { defaultProducts } from "../data/products";
import { useCountStore } from "./countStore";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = defaultProducts.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product?.imageUrl || "");
  const [quantity, setQuantity] = useState(1);
  const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
  // const [products, setProducts] = useState(defaultProducts);

  const colors = ["Red", "Blue", "Black", "White"];
  const { count, setCount, products, setProducts } = useCountStore();
  console.log(count, "Count");

  if (!product) {
    return (
      <div className="py-10 text-center">
        <h2 className="font-bold text-red-500 text-2xl">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto">
        <div className="bg-[#FFB22C] mb-10 py-20 w-full">
          <h1 className="font-bold text-black text-5xl text-center">
            Product Details
          </h1>
        </div>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mx-16">
          <div className="flex gap-6">
            <div className="flex flex-col space-y-4">
              {[product.imageUrl, ...Array(3)].map(
                (img: string, index: number) => (
                  <img
                    key={index}
                    src={img || `/placeholder.svg?height=400&width=400`}
                    alt={`Thumbnail ${index + 1}`}
                    className={`h-24 w-24 cursor-pointer rounded-lg border object-cover transition-colors ${
                      selectedImage === img
                        ? "border-[#FFB22C]"
                        : "border-gray-200 hover:border-[#FFB22C]"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                )
              )}
            </div>

            <div className="flex-1">
              <img
                src={selectedImage || product.imageUrl}
                alt={product.name}
                className="shadow-lg rounded-lg w-full h-[70vh] object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col bg-gray-100 mx-10 mb-12 p-8 border border-gray-300 rounded-lg">
            <h2 className="font-bold text-gray-900 text-3xl">{product.name}</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vitae arcu vel velit efficitur vestibulum vel in purus.
            </p>
            <div className="bg-gray-200 my-4 h-px" />
            <div className="font-bold text-[#FFB22C] text-2xl">
              ${product.price.toFixed(2)} USD
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-medium text-lg">Colors</label>
              <select className="p-2 border border-gray-300 focus:border-[#FFB22C] rounded-md focus:outline-none focus:ring-[#FFB22C] focus:ring-1 w-full">
                <option value="">Select Colors</option>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6 mb-2">
              <label className="block mb-2 font-medium text-lg">Quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="p-2 border border-gray-300 focus:border-[#FFB22C] rounded-md focus:outline-none focus:ring-[#FFB22C] focus:ring-1 w-full"
              />
            </div>

            <div className="flex justify-between items-center gap-2 p-2">
              <button
                className="bg-[#FFB22C] hover:bg-[#e6a028] px-5 py-3 rounded-md w-1/2 font-bold text-black transition-colors"
                onClick={() => {
                  setCount(count + quantity);
                  setIsProductAddedToCart(count as any);
                  setProducts([...products, product]);
                  console.log(products, "Products");
                }}
              >
                Add to Cart
              </button>

              <button className="bg-[#FFB22C] hover:bg-[#e6a028] px-5 py-3 rounded-md w-1/2 font-bold text-black transition-colors">
                Buy Now
              </button>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-bold text-xl">About this item :</h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-medium">Length</span>
                <span className="text-gray-600">Standard length</span>
              </div>

              <div className="gap-4 grid grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-8 h-8 text-[#FFB22C]" />
                  <p className="mt-2 text-sm">Free shipping</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShieldCheck className="w-8 h-8 text-[#FFB22C]" />
                  <p className="mt-2 text-sm">Safe transaction</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="w-8 h-8 text-[#FFB22C]" />
                  <p className="mt-2 text-sm">10 Day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
