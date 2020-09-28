import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Header } from 'semantic-ui-react';
import { closeModals } from '../../redux/modals/modal.actions';
import SelectDateForm from '../Forms/SelectDateForm';

const SelectDate: React.FC = () => {
  const dispatch = useDispatch();

  const { isSelectDateModalOpen }: any = useSelector<any>((state) => state.modals);

  const closeModal = () => {
    dispatch(closeModals());
  };

  return (
    <Modal
      onClose={closeModal}
      open={isSelectDateModalOpen}
      size="tiny"
      closeIcon
      basic
      closeOnEscape={false}
      closeOnDimmerClick={false}
    >
      <Header>Select Date for Player Game Projections</Header>
      <Modal.Content>
        <SelectDateForm />
      </Modal.Content>
    </Modal>
  );
};

export default SelectDate;
