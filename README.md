# Zeerostock Assignment – Inventory Search

## Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Data: In-memory array (static data)

---

## Features
- Search products by name (case-insensitive)
- Filter by category
- Filter by price range (min & max)
- Combine multiple filters
- Handles edge cases:
  - Empty search
  - Invalid price range
  - No results found

---

## Search Logic
The search API applies filters step-by-step on the dataset:
1. Product name filter using case-insensitive matching
2. Category filter
3. Minimum price filter
4. Maximum price filter

Each filter is optional and can be combined. If no filters are applied, all inventory items are returned.

---

##  Performance Improvement (for large datasets)
For large datasets, performance can be improved by:
- Using a database (like MongoDB or SQL)
- Adding indexes on product name and category
- Implementing pagination to limit results
- Using full-text search (e.g., ElasticSearch)

---

## How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
