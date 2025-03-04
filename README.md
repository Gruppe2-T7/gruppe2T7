# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder (tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
  Vi organisere billeder i assets mappe. Fonte indsætter vi i generel.css, som en fælles css fil.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet).
  Vi placerer det øverst i vores CSS- og Javascript-filer.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
  HTML-filer placere vi udenfor mapper, css-filer og js-filer i mapper med tilhørende navn.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)?
  Med små bogstaver, ellers camelCase. I grid navne, classes og id bruger vi bindestreg.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
  Vi navngiver dem samme navn, så de passer sammen, index.html > index.css > index.js

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)?
  Vi placerer script nederst i body, uden defer attribute.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular).
  Fx. feature-header-Sarah

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
  Vi har hver tildelt en html, css og js-fil. I alt 4 html-sider.

- Hvordan sikrer I, at commit-beskeder er beskrivende?
  Følger konventionen "add" efterfulgt af hvad der er ændret.

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
  Skriv i Messenger-chat.

## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions).
  Vi bruger arrow functions.

- Beslut hvilken CSS selector i benyttes til referencer i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS). Vi bestræber os efter at bruge class.

- Skal filer have korte forklaringer som kommentarer? Det vil hjælpe andre i gruppen at læse koden, hvis der er kommentarer til det.
  Vi skriver kommentarer til nogle dele af koden.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
  Vi henter dataene fra et API fra dummyJSON.

- Filtrering af produkter baseret på brugerens valg.
  Vores filtrering er mealtypes, difficulty og tag.

- Dynamisk visning af produkter i HTML.
  Lazy loads.

Brug korte beskrivelser, som i eksemplerne herover.

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?
  Denne funktion tager fat i URL, som henter dataen for alle opskrifter. Så når man kommer ind på siden kan man se alle opskrifterne.

- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?
  Den første if som viser at "All" er default og inde i else kan man gennem en dropdown vælge mealtype.

- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
  Vi har ikke en funktion som returnerer, vi manipulerer kun med det.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:
<!-- const url = "https://dummyjson.com/recipes?limit=0"; -->

<!-- let allRecipes,
  filteredData,
  mealType = "All"; -->

<!-- function hentData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allRecipes = data.recipes;
      filteredData = allRecipes;
      buildSelects();
      visListe(allRecipes);
    }); -->

<!-- function filterMealType(event) { -->

 <!-- // Hvilken mealType er valgt på select-listen?
  mealType = event.target.value;
  if (mealType == "All") {
    visListe(filteredData);
    h1.textContent = "Recipes/ " + mealType + " (" + filteredData.length + ")";
  } else {
    // Her filtreres det allerede filtrerede data efter den valgte mealType
    const filteredMealtypeData = filteredData.filter((recipe) => recipe.mealType.includes(mealType));
    // Det filtrerede data vises
    visListe(filteredMealtypeData);

    // overskriften rettes så den viser, hvad der er valgt
    // .length giver antallet af opskrifter på den aktuelle liste
    h1.textContent = "Recipes/ " + mealType + " (" + filteredMealtypeData.length + ")";
  } -->

```javascript
//funktionens kode:
function voresFunktion(sprog) {
  console.log(`${sprog} syntax highlighting`);
}
//hvordan funktionen kaldes:
voresFunktion("JavaScript");
```
