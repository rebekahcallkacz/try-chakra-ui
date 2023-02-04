import React, { useEffect, useState } from "react";
import { Flex, HStack, Spinner, useDisclosure } from "@chakra-ui/react";
import NavBar from "./NavBar";

import { fetchPeople } from "./_network";
import { IPerson, TPeopleData } from "./_types";
import PersonCard from "./PersonCard";
import FetchErrorAlert from "./FetchErrorAlert";

function App() {
  const {
    isOpen: isErrorAlertOpen,
    onClose: onCloseErrorAlert,
    onOpen: onOpenErrorAlert,
  } = useDisclosure({ defaultIsOpen: false });
  const [peopleData, setPeopleData] = useState<TPeopleData>({
    people: undefined,
    isLoading: true,
    isErrored: false,
  });
  const {
    people,
    isLoading: isPeopleLoading,
    isErrored: isPeopleErrored,
  } = peopleData;

  useEffect(() => {
    fetchPeople()
      .then((data: Array<IPerson>) =>
        setPeopleData({ people: data, isLoading: false, isErrored: false })
      )
      .catch(() => {
        setPeopleData({ people: null, isLoading: false, isErrored: true });
      });
  }, []);

  useEffect(() => {
    if (isPeopleErrored) onOpenErrorAlert();
  }, [isPeopleErrored, onOpenErrorAlert]);

  return (
    <>
      <NavBar />
      {isPeopleLoading && (
        <Flex justifyContent="center">
          <Spinner
            thickness="4px"
            speed="0.55s"
            emptyColor="gray.200"
            color="gray.500"
            size="xl"
            marginTop="20"
          />
        </Flex>
      )}
      {people && people.length > 0 && (
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          marginTop="10"
          marginBottom="10"
        >
          {people.map((person: IPerson) => (
            <HStack key={person.name}>
              <PersonCard personData={person} />
            </HStack>
          ))}
        </Flex>
      )}
      <FetchErrorAlert isOpen={isErrorAlertOpen} onClose={onCloseErrorAlert} />
    </>
  );
}

export default App;
