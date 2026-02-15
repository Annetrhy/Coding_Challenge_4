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

// Creating customer type discount
let customerType = "student"; // try "senior" or "regular"
let extraDiscount = 0;

if (customerType === "student") {
  extraDiscount = 0.05;
} else if (customerType === "senior") {
  extraDiscount = 0.07;
} else {
  extraDiscount = 0;
}

// Simulating checkout for 3 customers
for (let i = 1; i <= 3; i++) {
  let total = 0;

  // Each customer buys one of each product
  for (const product of products) {
    if (product.inventory > 0) {
      total += product.price;
      product.inventory--; // reduce inventory
    }
  }

  // Apply customer discount
  total -= total * extraDiscount;

  console.log(`Customer ${i} total: $${total.toFixed(2)}`);
}
