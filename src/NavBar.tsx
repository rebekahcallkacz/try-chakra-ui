import React from "react";
import { IconButton, Flex, HStack } from "@chakra-ui/react";

import HomeIcon from "./HomeIcon";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <Flex
      width="100%"
      align="center"
      justify="space-between"
      padding="1.5"
      backgroundColor="#A0AEC0"
    >
      <HStack>
        <IconButton
          icon={<HomeIcon />}
          aria-label="Home"
          variant="outline"
          as="a"
          href="localhost:3000"
        />
      </HStack>
      <HStack>
        <NavMenu />
      </HStack>
    </Flex>
  );
};

export default NavBar;
