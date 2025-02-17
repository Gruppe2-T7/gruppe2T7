const burger = document.querySelector(".burger"); /* Burgermenu ikonet */
const nav = document.querySelector("nav"); /* Navigationselementet */
const menu = document.querySelector(".menu"); /* Menuen der vises, når burgermenuen åbnes */

burger.addEventListener("click", burgerClick); /* Når du klikker på burgermenuen, starter funktioner burgerClick */
function burgerClick() {
  burger.classList.toggle("active"); /* Tilføjer eller fjerner klassen active på burgermenuen */
  nav.classList.toggle("active"); /* Tilføjer eller fjerner klassen active på navigationselementet */
} /* Burgermenuen skifter til åben eller lukket tilstand, og menuen vises eller skjules */

menu.addEventListener("click", menuClick); /* Når du klikker på menuen, starter funktionen menuClick */
function menuClick() {
  burger.classList.remove("active"); /* Fjerner klassen active fra burgermenuen (lukker den) */
  nav.classList.remove("active"); /* Fjerner klsse active fra navigationselementet (skjuler menuen) */
} /* Menuen lukkes når du klikker på et menupunkt */
