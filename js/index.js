const index_knap_container = document.querySelector(".index-knap-container");

fetch(`https://dummyjson.com/recipes`)
  .then((response) => response.json())
  .then((data) => showRecipes(data.recipes));

function showRecipes(recipes) {
  const markup = recipes.map((recipe) => `<a href="category.html?recipes=${recipe.cuisine}">${recipe.cuisine}</a>`).join("");

  console.log(markup);
  index_knap_container.innerHTML = markup;
}
