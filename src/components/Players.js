import { FormLabel, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Players() {
  const [numPlayers, setNumPlayers] = useState(3);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if(parseInt(numPlayers) >= 3) {
      const nPL = Array.from({length: numPlayers}).map((_, pl) => ({
          value: '',
      }));
      setPlayers(nPL);
    } else {
      setPlayers([]);
    }
  }, [numPlayers]);
  
  const handlePlayerName = (evt, index) => {
    const playerName = evt.target.value;
    let playerUpd = [...players];
    playerUpd[index].value = playerName;
    setPlayers(playerUpd);
  };

  return <Grid container>
      <Grid item md={12}>
        <FormLabel>How many Players? 
          <TextField type="number" value={numPlayers} onChange={(event) => setNumPlayers(event.target.value)} />
        </FormLabel>
      </Grid>
      {players && players.length >= 3 && players.map((pl, ind) => <Grid item md={4}>{ind + 1}. Name: <TextField
            value={pl.value}
            onChange={(event) => handlePlayerName(event, ind)} /></Grid>)}
    </Grid>
}

export default Players;
