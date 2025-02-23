import "bootstrap/dist/css/bootstrap.min.css";
import createPeep from "./apicreate";
import fetchPeeps from "./apifetch";
//DATABASE OF PEEPS FUNCTIONS

//I made the variables for what the training video called "state" and for DOM manipulation
export let peepsContainer = document.getElementById(
  "cardContainer"
) as HTMLDivElement;
const peepsButton = document.getElementById("showPeeps") as HTMLButtonElement;
const createPeepButton = document.getElementById(
  "addPeep"
) as HTMLButtonElement;
export const nameInput = document.getElementById(
  "nameInput"
) as HTMLTextAreaElement;
export const addressInput = document.getElementById(
  "addressInput"
) as HTMLTextAreaElement;

//event listener for show button (Read in CRUD)
peepsButton.addEventListener("click", (event) => {
  event.preventDefault();
  fetchPeeps();
});
//event listener for the create button (Create in CRUD)
createPeepButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (nameInput.value !== "" && addressInput.value !== "") createPeep();
});
