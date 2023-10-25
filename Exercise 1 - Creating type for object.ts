// Challenge: create a type describing this object

type Product = {
  name: string;
  price: number;
  images: string[];
  status: string;
};

const product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: "published",
} as Product;
