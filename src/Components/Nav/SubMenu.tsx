import React, { useState } from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';

const SubMenu = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e: any, { name }: any) => setActiveItem(name);

  return (
    <>
      <Menu pointing secondary>
        <Container>
          <Menu.Item name="optimizer" active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Item name="projections" active={activeItem === 'messages'} onClick={handleItemClick} />
          <Menu.Item name="lineups" active={activeItem === 'friends'} onClick={handleItemClick} />
          <Menu.Item name="analysis" active={activeItem === 'friends'} onClick={handleItemClick} />
        </Container>
      </Menu>

      <Segment style={{ border: '0px', boxShadow: 'none' }}>
        <Container>
          <h2>Line up optimizer</h2>
        </Container>
      </Segment>
    </>
  );
};

export default SubMenu;
