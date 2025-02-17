const list_view = document.querySelector(".grid_1-1-1");
const list = new URLSearchParams(window.location.search).get("list");

const overskrift = document.querySelector("h1");


fetch(`https://dummyjson.com/recipes?limit=0`)
  .then((response) => response.json())
  .then((data) => showList(data.recipes));

function showList(recipes) {
  const markup = recipes
    .map(
      (recipe) =>
        `<div class="card">
          <a href="single.html?id=${recipe.id}">
            <img src="${recipe.image}" class="dish-img" alt="${recipe.name}" />
          </a>
          <p class="product_name">${recipe.name}</p>
          <p class="product_difficulty">Difficulty: ${recipe.difficulty}</p>
        </div>`
    )
    .join("");

  console.log(markup);
  list_view.innerHTML = markup;
}
