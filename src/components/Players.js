import { Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Players() {
  const [numPlayers, setNumPlayers] = useState(3);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if(parseInt(numPlayers) >= 2) {
      const nPL = Array.from({length: numPlayers}).map((_, plIndx) => ({
          value: '',
          label: `Player-${plIndx + 1} Name`,
          placeholder: `Player-${plIndx + 1}`,
          score: 0,
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

  return <Grid spacing={3} container className="main-container">
      <Grid item md={12}>
        <TextField
          label="How many Players" type="number" value={numPlayers}
          onChange={(event) => setNumPlayers(event.target.value)}
          error={players.length < 2}
          helperText={players.length < 2 && "Minimum three players required."}
          />
      </Grid>
      {players && players.length >= 2 && players.map((pl, ind) => <Grid item md={4}><TextField
            value={pl.value}
            label={pl.label}
            placeholder={pl.placeholder}
            onChange={(event) => handlePlayerName(event, ind)} />
            Score: {pl.score ? 0 : pl.score}
          </Grid>)}
    </Grid>
}

export default Players;
