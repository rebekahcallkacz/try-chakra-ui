import React from "react";
import {
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagRightIcon,
  Tooltip,
} from "@chakra-ui/react";
import { InfoIcon, SettingsIcon } from "@chakra-ui/icons";

import { IPerson } from "./_types";
import PersonDataTable from "./PersonDataTable";

type TPersonCardProps = { personData: IPerson };
const PersonCard = ({ personData }: TPersonCardProps) => {
  return (
    <Card variant="filled" size="md" margin="5px" width="210px" align="center">
      <CardHeader>
        <Heading size="sm">{personData.name}</Heading>
      </CardHeader>
      <CardBody>
        <PersonDataTable person={personData} />
      </CardBody>
      <CardFooter>
        <HStack>
          <Tooltip label="Home Planet Info">
            <IconButton icon={<InfoIcon />} aria-label="More Info" />
          </Tooltip>
          <Tag size={"md"}>
            <TagLabel>Links</TagLabel>
            <TagRightIcon as={SettingsIcon} />
          </Tag>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
