import { peepsContainer } from "./main";
import deletePeep from "./apidelete";

type peep = {
  name: string;
  address: string;
  id: number;
};

//This is the function called in the Read event listener
export default async function fetchPeeps() {
  peepsContainer.innerHTML = "";
  const response = await fetch("http://localhost:3000/profiles");
  const peeps = await response.json();

  //This creates the card for each item in the JSON DB array
  peeps.forEach((peep: peep) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.innerHTML = `
           <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 id="cardName" class="card-title">${peep.name}</h5>
             <p id="cardAddress" class="card-text">${peep.address}</p>
             <button data-id=${peep.id} class="btn btn-danger">Delete</button>
           </div>
         </div>`;
    //This is the delete button for each card ties to each DB entry but the "peep.id"
    const deleteButton = card.querySelector(".btn-danger") as HTMLButtonElement;
    deleteButton.addEventListener("click", (_event: Event) => {
      card.remove();
      deletePeep(peep);
    });
    peepsContainer.appendChild(card);
  });
}
