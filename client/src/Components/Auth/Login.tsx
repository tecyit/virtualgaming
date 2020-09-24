import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Header } from 'semantic-ui-react';
import { openLoginModal, closeModals } from '../../redux/modals/modal.actions';
import LoginForm from '../Forms/LoginForm';

const LogIn: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoginModalOpen }: any = useSelector<any>((state) => state.modals);

  const openModal = () => {
    dispatch(openLoginModal());
  };

  const closeModal = () => {
    dispatch(closeModals());
  };

  return (
    <Modal
      onClose={closeModal}
      onOpen={openModal}
      open={isLoginModalOpen}
      size="tiny"
      closeIcon
      closeOnEscape={false}
      closeOnDimmerClick={false}
    >
      <Header>Log In</Header>
      <Modal.Content>
        <LoginForm />
      </Modal.Content>
    </Modal>
  );
};

export default LogIn;
