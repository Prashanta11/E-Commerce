// Define the Product Type
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  images: string[]; // New field for multiple images (thumbnails)
}

// Product Data
export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Kids Footwear",
    price: 150.0,
    category: "Footwear",
    imageUrl: "/images/kidsfootwear.avif",
    images: [
      "/images/kidsfootwear.avif",
      "/images/kidsfootwear1.avif",
      "/images/kidsfootwear2.avif",
      "/images/kidsfootwear3.avif",
    ],
  },
  {
    id: "2",
    name: "Hand Bag",
    price: 120.0,
    category: "Accessories",
    imageUrl: "/images/handbag.avif",
    images: [
      "/images/handbag.avif",
      "/images/handbag1.avif",
      "/images/handbag2.avif",
    ],
  },
  {
    id: "3",
    name: "Stylish Sling Bag",
    price: 180.0,
    category: "Accessories",
    imageUrl: "/images/stylistbag.avif",
    images: [
      "/images/stylistbag.avif",
      "/images/stylistbag1.avif",
      "/images/stylistbag2.avif",
    ],
  },
  {
    id: "4",
    name: "Patterned Shirt",
    price: 140.0,
    category: "Shirt",
    imageUrl: "/images/shirts.avif",
    images: [
      "/images/shirts.avif",
      "/images/shirts1.avif",
      "/images/shirts2.avif",
    ],
  },
  {
    id: "5",
    name: "Casual T-Shirt",
    price: 90.0,
    category: "T-Shirt",
    imageUrl: "/images/cshirt.avif",
    images: [
      "/images/cshirt.avif",
      "/images/cshirt1.avif",
      "/images/cshirt2.avif",
    ],
  },
  {
    id: "6",
    name: "Formal Leather Shoes",
    price: 250.0,
    category: "Footwear",
    imageUrl: "/images/lshoes.jpeg",
    images: [
      "/images/lshoes.jpeg",
      "/images/lshoes1.jpeg",
      "/images/lshoes2.jpeg",
    ],
  },
  {
    id: "7",
    name: "Men's Sunglasses",
    price: 110.0,
    category: "Accessories",
    imageUrl: "/images/Mglass.avif",
    images: [
      "/images/Mglass.avif",
      "/images/Mglass1.avif",
      "/images/Mglass2.avif",
    ],
  },
  {
    id: "8",
    name: "Classic Watch",
    price: 200.0,
    category: "Accessories",
    imageUrl: "/images/watch.jpeg",
    images: [
      "/images/watch.jpeg",
      "/images/watch1.jpeg",
      "/images/watch2.jpeg",
    ],
  },
];
