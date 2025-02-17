const productId = new URLSearchParams(window.location.search).get("id");
let product_view = document.querySelector(".product_view");

if (productId) {
  fetch(`https://dummyjson.com/recipes/${productId}`)
    .then((response) => response.json())
    .then((data) => {
      product_view.innerHTML = `
        <h1>${data.name}</h1>
        <img class="heroImage" src="${data.image}" alt="${data.name}" />
        <div class="grid_1-3">
          <p>Prep time: ${data.prepTimeMinutes} min.</p>
          <p>Cook time: ${data.cookTimeMinutes} min.</p>
        </div>
        <div class="grid_1-1">
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
              ${data.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
            </ul>
          </div>
          <div class="instructions">
            <h3>Instructions:</h3>
            <ol>
              ${data.instructions.map((step) => `<li>${step}</li>`).join("")}
            </ol>
          </div>
        </div>
      `;
    });
} else {
  product_view.innerHTML = markup;
}
