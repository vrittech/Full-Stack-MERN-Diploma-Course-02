import { faker } from "@faker-js/faker";

export const PRODUCTS = Array.from({ length: 50 }).map((d) => {
  return {
    id: faker.datatype.uuid(),
    productName: faker.commerce.product(),
    price: faker.commerce.price(),
    productDescription: faker.commerce.productDescription(),
    image: faker.image.food(),
  };
});
