const categoryType = new URLSearchParams(window.location.search).get("category");
const categoryContainer = document.querySelector(".grid_1-1-1-1");

fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((data) => {
    const recipes = data.recipes;

    const filterRecipes = recipes.filter((recipe) => recipe.mealType.includes(categoryType));

    categoryContainer.innerHTML = filterRecipes
      .map(
        (recipe) => `
      <div class="category-img-1">
        <a href="single.html?id=${recipe.id}">
          <img src="${recipe.image}" class="img-1" alt="${recipe.name}" />
        </a>
        <div class="link-1">
          <a href="single.html?id=${recipe.id}">${recipe.name}</a>
        </div>
      </div>
    `
      )
      .join("");
  });
