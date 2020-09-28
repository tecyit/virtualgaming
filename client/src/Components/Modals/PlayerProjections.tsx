import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../axios';
import { Modal, Header, Loader, Dimmer, Icon } from 'semantic-ui-react';

import { closeModals, openSelectDateModal } from '../../redux/modals/modal.actions';

const PlayerProjections: React.FC = () => {
  const dispatch = useDispatch();

  const { isOpenPlayerGameProjectionStatsModalOpen, activePlayerId, projectionDate }: any = useSelector<any>(
    (state) => state.modals,
  );

  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      setLoading(true);
      try {
        const { data }: any = await axios.get(
          `/projections/json/PlayerGameProjectionStatsByPlayer/${projectionDate}/${activePlayerId}`,
        );

        setPlayer(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchPlayer();
  }, [activePlayerId, projectionDate]);

  const openDateModal = () => {
    dispatch(openSelectDateModal(activePlayerId));
  };

  const closeModal = () => {
    dispatch(closeModals());
  };

  return (
    <Modal
      onClose={closeModal}
      open={isOpenPlayerGameProjectionStatsModalOpen}
      size="tiny"
      closeIcon
      closeOnEscape={false}
      closeOnDimmerClick={false}
    >
      <Header>
        <Icon name="arrow left" onClick={openDateModal} />
        Player Game Projections
      </Header>
      <Modal.Content>
        {loading ? (
          <Dimmer active inverted style={{ height: '100vh' }}>
            <Loader size="large">Loading</Loader>
          </Dimmer>
        ) : player ? (
          <div>
            <pre>{JSON.stringify(player, null, 2)}</pre>
          </div>
        ) : (
          <p>No projections found</p>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default PlayerProjections;
