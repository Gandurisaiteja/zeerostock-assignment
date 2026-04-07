const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

console.log("Server started...");

const inventory = [
  { id: 1, productName: "Laptop", category: "Electronics", price: 50000 },
  { id: 2, productName: "Phone", category: "Electronics", price: 20000 },
  { id: 3, productName: "Headphones", category: "Electronics", price: 3000 },
  { id: 4, productName: "Keyboard", category: "Electronics", price: 1500 },

  { id: 5, productName: "Chair", category: "Furniture", price: 3000 },
  { id: 6, productName: "Table", category: "Furniture", price: 7000 },
  { id: 7, productName: "Sofa", category: "Furniture", price: 15000 },
  { id: 8, productName: "Bed", category: "Furniture", price: 20000 },

  { id: 9, productName: "Pen", category: "Stationery", price: 50 },
  { id: 10, productName: "Notebook", category: "Stationery", price: 100 },
  { id: 11, productName: "Marker", category: "Stationery", price: 80 },
  { id: 12, productName: "Pencil", category: "Stationery", price: 20 }
];

app.get('/search', (req, res) => {
  let { q, category, minPrice, maxPrice } = req.query;

  if (minPrice && maxPrice && Number(minPrice) > Number(maxPrice)) {
    return res.status(400).json({ message: "Invalid price range" });
  }

  let result = inventory;

  if (q) {
    result = result.filter(item =>
      item.productName.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    result = result.filter(item => item.category === category);
  }

  if (minPrice) {
    result = result.filter(item => item.price >= Number(minPrice));
  }

  if (maxPrice) {
    result = result.filter(item => item.price <= Number(maxPrice));
  }

  res.json(result);
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});