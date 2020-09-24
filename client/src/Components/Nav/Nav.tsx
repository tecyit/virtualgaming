import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Container, Icon } from 'semantic-ui-react';
import { openSignUpModal, openLoginModal } from '../../redux/modals/modal.actions';
import { SignUp, Login } from '../Auth';
import styles from './Nav.module.scss';

const Nav = () => {
  const dispatch = useDispatch();

  const handleOpenSignUp = () => {
    dispatch(openSignUpModal());
  };

  const handleOpenLogin = () => {
    dispatch(openLoginModal());
  };

  return (
    <>
      <Menu stackable size="massive" borderless className={styles.navWrapper}>
        <Container>
          <Menu.Item>VirtualGaming</Menu.Item>

          <Menu.Item>Optimizer</Menu.Item>

          <Menu.Item>Bankroll</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon name="facebook" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="twitter" />
            </Menu.Item>
            <Menu.Item>
              <Icon name="google" />
            </Menu.Item>
            <Menu.Item>Premium</Menu.Item>
            <Menu.Item>Tutorials</Menu.Item>
            <Menu.Item onClick={handleOpenLogin}>Log In</Menu.Item>
            <Menu.Item onClick={handleOpenSignUp}>Sign Up</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <SignUp />
      <Login />
    </>
  );
};

export default Nav;
