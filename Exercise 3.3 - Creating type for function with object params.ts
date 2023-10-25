// Challenge: type the function parameter and the return type

type ProductObj = {
  name: string;
  price: number;
  images: string[];
};

function updateProductObj({ name, price, images }: ProductObj): ProductObj {
  // update logic here ...
  return { name, price, images };
}

const productObj = updateProductObj({
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
}) as ProductObj;

/**** ALTERNATIVE SOLUTION ****/

// we don't need to define the return type here
// TS can infer it from the return value
function updateProductAlternative(productObj: ProductObj) {
  // update logic here ...
  return productObj;
}

// the type is inferred
const productWithInferredType = updateProductAlternative({
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
});
