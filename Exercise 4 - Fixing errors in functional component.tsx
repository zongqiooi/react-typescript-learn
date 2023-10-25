// Challenge: Fix the error in the App component

export function App() {
  return (
    <div>
      <Product />
    </div>
  );
}

function Product() {
  const { product, error } = useGetProduct();

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <div>
      <div>
        {product.name} ${product.price}
      </div>
      {product.images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}

// no need to read this, simply check
// the types in the Product component
function useGetProduct():
  | { product: Product; error: undefined }
  | { product: undefined; error: Error } {
  if (Math.random() > 0.5) {
    return { product: undefined, error: new Error("Something went wrong") };
  }
  return {
    error: undefined,
    product: {
      name: "Shampoo",
      price: 2.99,
      images: ["image-1.png", "image-2.png"],
    },
  };
}
