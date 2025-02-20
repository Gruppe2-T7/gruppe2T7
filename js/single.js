const opskriftId = new URLSearchParams(window.location.search).get("id");
let product_view = document.querySelector(".product_view");

if (opskriftId) {
  fetch(`https://dummyjson.com/recipes/${opskriftId}`)
    .then((response) => response.json())
    .then((data) => {
      // update tiltle in tab
      document.title = data.name;

      // update whole page
      product_view.innerHTML = `
        <h1>${data.name}</h1>
        <img class="heroImage" src="${data.image}" alt="${data.name}" />
        <div class="grid_1-3">
        <img src="assets/prep.svg" alt="prep icon" class="food_icon" />
          <p>Prep time: ${data.prepTimeMinutes} min.</p>
        <img src="assets/cook.svg" alt="cook icon" class="food_icon" />
          <p>Cook time: ${data.cookTimeMinutes} min.</p>
        </div>
        <div class="grid_1-1">
          <div class="ingredients">
            <h3>Ingredients:</h3>
            <ul>
              ${data.ingredients
                .map((ingredient) => `<li>${ingredient}</li>`) //convert array to String
                .join("")}
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
}
