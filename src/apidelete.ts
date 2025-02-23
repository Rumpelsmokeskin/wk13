type peep = {
    name: string;
    address: string;
    id: number;
  }; 

  //this is the deletePeep function that removes a PEEP from the JSON DB
export default async function deletePeep(peep: peep) {
    const response = await fetch("http://localhost:3000/profiles/" + peep.id, {
      method: "DELETE",
    });
    return response;
  }
  