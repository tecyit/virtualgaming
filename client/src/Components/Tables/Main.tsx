import React from 'react';
import { Table, Container } from 'semantic-ui-react';

const TableExampleCelled = () => (
  <Container>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Player Name</Table.HeaderCell>
          <Table.HeaderCell>Likes</Table.HeaderCell>
          <Table.HeaderCell>Pes</Table.HeaderCell>
          <Table.HeaderCell>Salary</Table.HeaderCell>
          <Table.HeaderCell>Teams</Table.HeaderCell>
          <Table.HeaderCell>OPP</Table.HeaderCell>
          <Table.HeaderCell>Results</Table.HeaderCell>
          <Table.HeaderCell>PS</Table.HeaderCell>
          <Table.HeaderCell>Pes</Table.HeaderCell>
          <Table.HeaderCell>PER</Table.HeaderCell>
          <Table.HeaderCell>Place</Table.HeaderCell>
          <Table.HeaderCell>DWT</Table.HeaderCell>
          <Table.HeaderCell>L2</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
);

export default TableExampleCelled;
