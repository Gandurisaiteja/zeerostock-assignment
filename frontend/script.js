async function search() {
  const q = document.getElementById("q").value;
  const category = document.getElementById("category").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;

  const status = document.getElementById("status");
  const resultsDiv = document.getElementById("results");

  // Clear previous content
  status.textContent = "Loading...";
  resultsDiv.innerHTML = "";

  const url = `http://localhost:5000/search?q=${q}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const err = await res.json();
      status.textContent = err.message;
      return;
    }

    const data = await res.json();

    status.textContent = "";

    // No results case
    if (data.length === 0) {
      const noResult = document.createElement("div");
      noResult.className = "no-results";
      noResult.textContent = "No results found";

      resultsDiv.appendChild(noResult);
      return;
    }

    // Render results using DOM
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("strong");
      title.textContent = item.productName;

      const br1 = document.createElement("br");

      const categoryText = document.createElement("span");
      categoryText.textContent = "Category: " + item.category;

      const br2 = document.createElement("br");

      const priceText = document.createElement("span");
      priceText.textContent = "Price: ₹" + item.price;

      // Append all elements
      card.appendChild(title);
      card.appendChild(br1);
      card.appendChild(categoryText);
      card.appendChild(br2);
      card.appendChild(priceText);

      resultsDiv.appendChild(card);
    });

  } catch (error) {
    status.textContent = "Error fetching data";
  }
}