import React from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>Other Page</MenuItem>
        <MenuDivider></MenuDivider>
        <MenuGroup title="About Me">
          <MenuItem
            as="a"
            href="https://github.com/rebekahcallkacz"
            target="_blank"
          >
            GitHub
          </MenuItem>
          <MenuItem
            as="a"
            href="https://www.linkedin.com/in/rebekah-callari-kaczmarczyk/"
            target="_blank"
          >
            LinkedIn
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
