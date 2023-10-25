// Challenge: create a type describing this object
// this time use an enum for the "status" field

enum ProductStatus {
  PUBLISHED = "published",
  DRAFT = "draft",
}

type ProductEnum = {
  name: string;
  price: number;
  images: string[];
  status: ProductStatus;
};

const productEnum = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: ProductStatus.PUBLISHED, // alternative value "draft"
} as ProductEnum;
