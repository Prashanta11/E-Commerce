import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useCountStore } from "./countStore";

const Cart = () => {
  const { products } = useCountStore();

  const product = products.map((product) => {
    if (!product) {
      return (
        <div className="py-10 text-center">
          <h2 className="font-bold text-red-500 text-2xl">
            No product in the cart
          </h2>
        </div>
      );
    }
    return (
      <div>
        <img src={product.imageUrl} alt="" />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    );
  });
  return (
    <div className="space-y-5 p-30">
      <h1 className="font-bold text-lg">Product Details</h1>

      <div>{product}</div>

      <Button className="bg-yellow-400 rounded-md w-fit text-white">
        <Link to="/checkout">Checkout</Link>
      </Button>
    </div>
  );
};

export default Cart;
