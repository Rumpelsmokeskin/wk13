import { nameInput } from "./main";
import { addressInput } from "./main";
//function to create a PEEP in the JSON DB

export default async function createPeep() {
  const newPeep = { name: nameInput.value, address: addressInput.value };
  console.log(newPeep);
  const response = await fetch("http://localhost:3000/profiles", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPeep),
  });
  return response;
}
