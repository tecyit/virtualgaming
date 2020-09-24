import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Header } from 'semantic-ui-react';
import { openSignUpModal, closeModals } from '../../redux/modals/modal.actions';
import SignUpForm from '../Forms/SignUpForm';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const { isSignUpModalOpen }: any = useSelector<any>((state) => state.modals);

  const openModal = () => {
    dispatch(openSignUpModal());
  };

  const closeModal = () => {
    dispatch(closeModals());
  };

  return (
    <Modal
      onClose={closeModal}
      onOpen={openModal}
      open={isSignUpModalOpen}
      size="tiny"
      closeIcon
      closeOnEscape={false}
      closeOnDimmerClick={false}
    >
      <Header>Sign Up</Header>
      <Modal.Content>
        <SignUpForm />
      </Modal.Content>
    </Modal>
  );
};

export default SignUp;
