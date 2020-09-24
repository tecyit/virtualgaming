import React, { useState, useEffect } from 'react';
import { Input, Table, Icon, Loader, Dimmer } from 'semantic-ui-react';
import axios from '../../axios';
import styles from './Table.module.scss';

const Individual: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      setLoading(true);
      try {
        const { data }: any = await axios.get('/projections/json/PlayerGameProjectionStatsByPlayer/2020-SEP-09');

        console.log('Data from the api is: ', data);
        setPlayer(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchPlayer();
  }, []);

  return (
    <>
      {loading ? (
        <Dimmer active inverted style={{ height: '100vh' }}>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <Table celled structured size="small" compact textAlign="center" loading>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="12" style={{ textAlign: 'left' }}>
                  <Input icon="users" iconPosition="left" placeholder="Search players..." />
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="3">Opponent</Table.HeaderCell>
                <Table.HeaderCell colSpan="3">FGA</Table.HeaderCell>
                <Table.HeaderCell colSpan="3">Minutes</Table.HeaderCell>
                <Table.HeaderCell colSpan="4">FP</Table.HeaderCell>
                <Table.HeaderCell colSpan="3">Proj</Table.HeaderCell>
                <Table.HeaderCell colSpan="2">
                  <Icon name="question circle outline" />
                </Table.HeaderCell>
              </Table.Row>
              <Table.Row className={styles.tableRow}>
                <Table.HeaderCell>Player Name</Table.HeaderCell>

                <Table.HeaderCell>Pos</Table.HeaderCell>
                <Table.HeaderCell>Team</Table.HeaderCell>
                <Table.HeaderCell>Opp</Table.HeaderCell>
                <Table.HeaderCell>Salary</Table.HeaderCell>
                <Table.HeaderCell>PS</Table.HeaderCell>
                <Table.HeaderCell>USG</Table.HeaderCell>
                <Table.HeaderCell>PER</Table.HeaderCell>
                <Table.HeaderCell>Pace</Table.HeaderCell>
                <Table.HeaderCell>DEff</Table.HeaderCell>
                <Table.HeaderCell>DvP</Table.HeaderCell>
                <Table.HeaderCell>L2</Table.HeaderCell>
                <Table.HeaderCell>L5</Table.HeaderCell>
                <Table.HeaderCell>S</Table.HeaderCell>
                <Table.HeaderCell>L2</Table.HeaderCell>
                <Table.HeaderCell>L5</Table.HeaderCell>
                <Table.HeaderCell>S</Table.HeaderCell>
                <Table.HeaderCell>L5</Table.HeaderCell>
                <Table.HeaderCell>S</Table.HeaderCell>
                <Table.HeaderCell>F</Table.HeaderCell>
                <Table.HeaderCell>C</Table.HeaderCell>
                <Table.HeaderCell>Min</Table.HeaderCell>
                <Table.HeaderCell>FP</Table.HeaderCell>
                <Table.HeaderCell>Val</Table.HeaderCell>
                <Table.HeaderCell>L</Table.HeaderCell>
                <Table.HeaderCell>E</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>6</Table.Cell>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>8</Table.Cell>
                <Table.Cell>9</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>11</Table.Cell>
                <Table.Cell>12</Table.Cell>
                <Table.Cell>13</Table.Cell>
                <Table.Cell>14</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>16</Table.Cell>
                <Table.Cell>17</Table.Cell>
                <Table.Cell>18</Table.Cell>
                <Table.Cell>19</Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>21</Table.Cell>
                <Table.Cell>22</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>24</Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>26</Table.Cell>
                <Table.Cell>27</Table.Cell>
                <Table.Cell>28</Table.Cell>
                <Table.Cell>29</Table.Cell>
                <Table.Cell>30</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div>
            <pre>{JSON.stringify(player, null, 2)}</pre>
          </div>
        </>
      )}
    </>
  );
};

export default Individual;
