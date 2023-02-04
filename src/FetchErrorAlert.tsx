import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Flex,
  HStack,
} from "@chakra-ui/react";
type TFetchErrorAlertProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FetchErrorAlert = ({ isOpen, onClose }: TFetchErrorAlertProps) => {
  return isOpen ? (
    <Flex>
      <Alert status="error" justifyContent="space-between">
        <HStack>
          <AlertIcon />
          <AlertTitle>There was an error retrieving the data!</AlertTitle>
          <AlertDescription>Refesh the page to try again.</AlertDescription>
        </HStack>
        <HStack>
          <Button
            onClick={onClose}
            backgroundColor="red.500"
            textColor="gray.50"
          >
            Dismiss
          </Button>
        </HStack>
      </Alert>
    </Flex>
  ) : null;
};
export default FetchErrorAlert;
