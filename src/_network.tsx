import { IPerson, IPlanet } from "./_types";

export const fetchPeople = async (): Promise<Array<IPerson>> => {
  // Get the response
  const response = await fetch(`https://swapi.dev/api/people`, {
    // This tells the API that you want your data in JSON format
    headers: { "Content-Type": "application/json" },
  });
  // Pull out your data
  const data = await response.json();
  // If there's data, return the results (where the people are)
  if (data) {
    console.log("this is fetching people data");
    return data.results;
  }
  // If there's not data, return an empty array
  return [];
};

export const loadPlanet = async (url: string): Promise<IPlanet | null> => {
  // Get the response
  const response = await fetch(url, {
    // This tells the API that you want your data in JSON format
    headers: { "Content-Type": "application/json" },
  });
  // Pull out your data
  const data = await response.json();
  // If there's data, return it
  if (data) {
    return data;
  }
  // If there's not data, return null
  return null;
};
