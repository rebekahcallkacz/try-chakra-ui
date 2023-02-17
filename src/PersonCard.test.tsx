import React from "react";
import { render, screen } from "@testing-library/react";
import { IPerson } from "./_types";
import PersonCard from "./PersonCard";

const MOCK_PERSON_DATA: IPerson = {
  name: "Rebekah",
  birth_year: "1991",
  eye_color: "blue",
  gender: "female",
  hair_color: "brown",
  height: "5'7",
  mass: "unknown",
  skin_color: "white",
  homeworld: "earth",
  films: ["The Phantom of the Opera"],
  species: ["human"],
  starships: ["The Millenium Falcon"],
  vehicles: ["Honda CRV"],
  url: "theadventuresofbeka.wordpress.com",
  created: "2/16/2023",
  edited: "2/16/2023",
};
test("renders card with gender", () => {
  render(<PersonCard personData={MOCK_PERSON_DATA} />);
  const cardElement = screen.getByText(/female/i);
  expect(cardElement).toBeInTheDocument();
});
