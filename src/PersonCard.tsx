import React from "react";
import {
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import { IPerson } from "./_types";

type TPersonCardProps = { personData: IPerson };
const PersonCard = ({ personData }: TPersonCardProps) => {
  return (
    <Card variant="filled" size="md" margin="5px" width="200px" align="center">
      <CardHeader>
        <Heading size="sm">{personData.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{`Gender: ${personData.gender}`}</Text>
      </CardBody>
      <CardFooter>
        <IconButton icon={<InfoIcon />} aria-label="More Info" />
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
