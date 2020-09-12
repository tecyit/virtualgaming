import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import PlayersTable from '../Tables/Players';
import styles from './Nav.module.scss';

const panes = [
  {
    menuItem: 'Optimizer',
    render: () => (
      <Tab.Pane attached={false} className={styles.tabPane}>
        <PlayersTable />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Tab 2',
    render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: 'Tab 3',
    render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const TabMenu = () => (
  <Container>
    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
  </Container>
);

export default TabMenu;
