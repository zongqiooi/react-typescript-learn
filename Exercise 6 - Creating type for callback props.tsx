// Challenge: type the props so that the component
// can be rendered as follows
//
// <Product
//   id="product-1"
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
//   addToBasket={(id) => console.log(id)}
// />

type ProductProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
  addToBasket: (id: string) => void;
};

export function Product({
  id,
  name,
  price,
  images,
  addToBasket,
}: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(id)}></button>
    </div>
  );
}
