
// Simple product library (JS version)
export const products = [
  { id: 1, name: "Eco Bottle", price: 10 },
  { id: 2, name: "Recycled Bag", price: 5 },
];

export function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}
