import React from 'react';
import { useDispatch } from 'react-redux';
import { DateInput } from 'semantic-ui-calendar-react';
import { openPlayerGameProjectionStatsModal } from '../../redux/modals/modal.actions';

const SelectDateForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e: any, { value }: any) => {
    dispatch(openPlayerGameProjectionStatsModal(value));
  };

  return (
    <>
      <DateInput
        name="date"
        placeholder="Date"
        value=""
        inline
        iconPosition="left"
        dateFormat="YYYY-MMM-DD"
        onChange={handleChange}
      />
    </>
  );
};

export default SelectDateForm;
