const categoryType = new URLSearchParams(window.location.search).get("category");
const categoryContainer = document.querySelector(".grid_1-1-1-1");

// test

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    categoryContainer.innerHTML = Recipes.map(
      (recipe) => `
      <div class="category-img-1">
        <a href="list.html?id=${recipe.id}">
          <img src="${recipe.image}" class="img-1" alt="${recipe.name}" />
        </a>
        <div class="link-1">
          <a href="list.html?id=${recipe.id}">${recipe.name}</a>
        </div>
      </div>
    `
    ).join("");
  });
