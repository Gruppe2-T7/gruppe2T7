const list_view = document.querySelector(".grid_1-1-1");
const h2 = document.querySelector("h2");
const selectMealType = document.querySelector("#mealType");
selectMealType.addEventListener("change", filterMealType);
const url = "https://dummyjson.com/recipes?limit=0"; // limit=0 henter alle 50 opskrifter

let allRecipes,
  filteredData,
  mealType = "All";

function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      filteredData = allRecipes;
      buildSelects();
      visListe(allRecipes);
    });
}

hentData();

function buildSelects() {
  // Her dannes en anden select-liste med de mealTypes der findes i det hentede data på samme måde
  const uniqueMTypes = Array.from(new Set(allRecipes.map((recipe) => recipe.mealType[0])));
  const markup2 = uniqueMTypes.map((element) => ` <option value="${element}">${element}</option>`).join("");
  selectMealType.innerHTML += markup2;
}

function visListe(data) {
  const markup = data
    .map(
      (opskrift) => `        
      <article>
      <a href="single.html?id=${opskrift.id}">      
    <img src="${opskrift.image}" alt="meal">
    </a>
    <h2>${opskrift.name}</h2>
            <p>${opskrift.difficulty}</p>
        </article>`
    )
    .join("");
  list_view.innerHTML = markup;
}

function filterMealType(event) {
  // Hvilken mealType er valgt på select-listen?
  mealType = event.target.value;
  if (mealType == "All") {
    visListe(filteredData);
  } else {
    // Her filtreres det allerede filtrerede data efter den valgte mealType
    const filteredMealtypeData = filteredData.filter((recipe) => recipe.mealType.includes(mealType));
    // Det filtrerede data vises
    visListe(filteredMealtypeData);

    // overskriften rettes så den viser, hvad der er valgt
    h2.textContent = "Opskrifter / " + mealType + " (" + filteredMealtypeData.length + ")";
    // .length giver antallet af opskrifter på den aktuelle liste
  }
}
