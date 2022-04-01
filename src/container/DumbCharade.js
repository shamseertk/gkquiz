import { Button, FormControl, FormLabel, Grid, List, ListItem, ListItemText, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { dcData } from '../dataAnimal';
import { generateRandomNumber } from '../utils/utils';

function DumbCharade() {
  const [numPlayers, setNumPlayers] = useState(3);
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [dcLocalData, setDCLocalData] = useState(dcData);
  const [currentDCData, setCurrentDCData] = useState({});
  const [currPlayer, setCurrPlayer] = useState('');

  useEffect(() => {
    if(parseInt(numPlayers) === 3) {
      const nPL = Array.from({length: numPlayers}).map((_, pl) => ({
          value: '',
      }));
      setPlayers(nPL);
    } else {
      setPlayers([]);
    }
  }, [numPlayers, setPlayers]);
  
  const handlePlayerName = (evt, index) => {
    const playerName = evt.target.value;
    let playerUpd = [...players];
    playerUpd[index].value = playerName;
    setPlayers(playerUpd);
  };

  const handleGenerateTeam = () => {
    setTeam([{
      from: players[0].value,
      to: players[1].value,
    }, {
      from: players[0].value,
      to: players[2].value,
    }, {
      from: players[1].value,
      to: players[2].value,
    }, {
      from: players[1].value,
      to: players[0].value,
    }, {
      from: players[2].value,
      to: players[0].value,
    }, {
      from: players[2].value,
      to: players[1].value,
    }]);
    setCurrPlayer(`${players[0].value}${players[1].value}`);
  };

  const handleGetRandomAnimal = (from, to) => {
    const currentIndex = generateRandomNumber(dcLocalData.length - 1);
    setCurrentDCData(dcLocalData[currentIndex]);
    dcLocalData.splice(currentIndex, 1);
    setDCLocalData(dcLocalData);
    if(from && to) {
      setCurrPlayer(`${from}${to}`);
    }
  };

  return <>
  <FormControl>
    <FormLabel>How many Players? 
      <TextField type="number" value={numPlayers} onChange={(event) => setNumPlayers(event.target.value)} />
    </FormLabel>
      {players && players.map((pl, ind) => 
    <FormLabel key={`${ind}${pl.value}`}>{ind + 1}. Name: <TextField
      value={pl.value}
      onChange={(event) => handlePlayerName(event, ind)} /></FormLabel>)}
    {parseInt(numPlayers) === 3 && <Button onClick={handleGenerateTeam}>Generate The Team</Button>}
    {parseInt(numPlayers) > 3 && <Button onClick={handleGetRandomAnimal}>Start</Button>}
  </FormControl>
  <Grid container>
    <Grid item md={4}>
      <List component="nav">
        {team.map(tm => <ListItem key={`${tm.from}${tm.to}`} button className="list-item" onClick={() => handleGetRandomAnimal(tm.from, tm.to)}>
          <ListItemText className={`${tm.from}${tm.to}` === currPlayer ? `list-item-selected` : `list-item`} primary={`${tm.from}  ---> ${tm.to}`} />
        </ListItem>)}
      </List>
    </Grid>
    <Grid item md={8}>
      {currentDCData.name}
    </Grid>
  </Grid>
  </>
}

export default DumbCharade;