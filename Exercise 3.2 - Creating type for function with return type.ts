// Challenge: type the function parameters and the return type

type ProductReturn = {
  name: string;
  price: number;
  images: string[];
};

function updateProductReturn(
  name: string,
  price: number,
  images: string[]
): ProductReturn {
  // update logic here ...
  return { name, price, images };
}

// product should be of type Product (to be implemented)
const productReturn = updateProductReturn("Shampoo", 2.99, [
  "image-1.png",
  "image-2.png",
]);
