import React, { useState } from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e: any, { name }: any) => setActiveItem(name);

  return (
    <Menu stackable size="massive" borderless className={styles.navWrapper}>
      <Container>
        <Menu.Item>DailyFantasyNerd</Menu.Item>

        <Menu.Item name="features" active={activeItem === 'features'} onClick={handleItemClick}>
          Optimizer
        </Menu.Item>

        <Menu.Item name="testimonials" active={activeItem === 'testimonials'} onClick={handleItemClick}>
          Bankroll
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            <Icon name="facebook" />
          </Menu.Item>
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            <Icon name="twitter" />
          </Menu.Item>
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            <Icon name="google" />
          </Menu.Item>
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            Premium
          </Menu.Item>
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            Tutorials
          </Menu.Item>
          <Menu.Item name="sign-in" active={activeItem === 'sign-in'} onClick={handleItemClick}>
            FAQ
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default Nav;
