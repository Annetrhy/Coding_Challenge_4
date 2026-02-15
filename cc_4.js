// Creating a product array with 5 products
const products = [
  { name: "Laptop", category: "electronics", price: 1200, inventory: 5 },
  { name: "T-Shirt", category: "apparel", price: 25, inventory: 10 },
  { name: "Apples", category: "groceries", price: 5, inventory: 20 },
  { name: "Laundry Soap", category: "household", price: 12, inventory: 8 },
  { name: "Notebook", category: "office", price: 4, inventory: 15 }
];

// Applying category discounts using for...of and switch
for (const product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8; // 20% off
      break;

    case "apparel":
      product.price *= 0.85; // 15% off
      break;

    case "groceries":
    case "household":
      product.price *= 0.9; // 10% off
      break;

    default:
      // No discount
      break;
  }
}

console.log("After category discounts:", products);
