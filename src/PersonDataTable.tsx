import { Table, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";

import { IPerson } from "./_types";

type TPersonDataTableProps = { person: IPerson };

const PersonDataTable = ({ person }: TPersonDataTableProps) => {
  return (
    <TableContainer>
      <Table size="sm">
        <Tbody>
          <Tr>
            <Th>Birth Year</Th>
            <Td>{person.birth_year}</Td>
          </Tr>
          <Tr>
            <Th>Gender</Th>
            <Td>{person.gender}</Td>
          </Tr>
          <Tr>
            <Th>Eye Color</Th>
            <Td>{person.eye_color}</Td>
          </Tr>
          <Tr>
            <Th>Hair Color</Th>
            <Td>{person.hair_color}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PersonDataTable;
