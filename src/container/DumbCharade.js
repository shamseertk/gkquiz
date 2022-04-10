import { Button, FormLabel, Grid, List, ListItem, ListItemText, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { generateRandomNumber } from '../utils/utils';
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from '../services/fb';
import _ from 'lodash';
import Countdown from 'react-countdown';

function DumbCharade() {
  const [dcLocalData, setDCLocalData] = useState([]);
  const getQuizDocs = async () => {
    const locQuizzes = [];
    const querySnapshot = await getDocs(collection(db, "dcData"));
    querySnapshot.forEach((doc) => {
      locQuizzes.push({ id: doc.id, ...doc.data() });
    });
    setDCLocalData(locQuizzes);
  }
  useEffect(() => {
    if (dcLocalData.length < 1) {
      getQuizDocs();
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const [numPlayers, setNumPlayers] = useState(3);
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [currentDCData, setCurrentDCData] = useState({});
  const [currPlayer, setCurrPlayer] = useState('');
  const [timer, setTimer] = useState(30);
  const [runTimer, setRunTimer] = useState(false);

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

  const getTheFirstTeamIndex = (checkArrExi) => {
    const randIndex = generateRandomNumber(players.length);
    if (checkArrExi.indexOf(randIndex) > -1) {
      return getTheFirstTeamIndex(checkArrExi);
    } else {
      return randIndex;
    }
  }

  const handleGenerateTeam = () => {
    setTeam([]);
    if(players.length === 3) {
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
    } else {
      const teamAIndexes = [];
      Array.from({length: Math.ceil(parseInt(players.length)/2)}).forEach((_ , ind) => {
        const randIndex = getTheFirstTeamIndex(teamAIndexes);
        teamAIndexes.push(randIndex);
      });
      const team = [];
      teamAIndexes.forEach(ind => {
        players.forEach((pl, plIndex) => {
          if(teamAIndexes.indexOf(plIndex) === -1){
            team.push({from: players[ind].value, to: pl.value})
          }
        })
      })
      setTeam(team);
    }
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

  const getTheTeams = () => {
    const teamA = Object.keys(_.groupBy(team, item => item.from));
    const teamB = Object.keys(_.groupBy(team, item => item.to));
    return {
      wholeTeam: _.compact(_.flatMap(_.zip(teamA, teamB))),
      teamA,
      teamB
    };
  }

  const startTimer = () => {
    setRunTimer(true);
  }

  return <>
    <Grid container>
      <Grid item md={12}>
        <FormLabel>How many Players? 
          <TextField type="number" value={numPlayers} onChange={(event) => setNumPlayers(event.target.value)} />
        </FormLabel>
      </Grid>
      {players && players.length >= 3 && players.map((pl, ind) => <Grid item md={4}>{ind + 1}. Name: <TextField
            value={pl.value}
            onChange={(event) => handlePlayerName(event, ind)} /></Grid>)}
    </Grid>
    {parseInt(numPlayers) >= 3 && <Button onClick={handleGenerateTeam}>Generate The Team</Button>}
  <Grid container>
    <Grid item md={4}>
      <List component="nav">
        {parseInt(numPlayers) === 3 ? team.map(tm => <ListItem disabled={dcLocalData.length < 1} key={`${tm.from}${tm.to}`} button className="list-item" onClick={() => handleGetRandomAnimal(tm.from, tm.to)}>
          <ListItemText className={`${tm.from}${tm.to}` === currPlayer ? `list-item-selected` : `list-item`} primary={`${tm.from}  ---> ${tm.to}`} />
        </ListItem>)
        : getTheTeams().wholeTeam.map(pl =><ListItem disabled={dcLocalData.length < 1} key={`${pl}`}
          button className="list-item" onClick={() => handleGetRandomAnimal(pl)}>
        <ListItemText
          className={`${pl}` === currPlayer ? `list-item-selected` : `list-item`}
          primary={`${pl}${getTheTeams().teamA.indexOf(pl) > -1 ? '(TeamA)' : '(TeamB)'}`} />
      </ListItem>)}
      </List>
    </Grid>
    <Grid item md={8}>
      {currentDCData.name}
      <TextField value={timer} onChange={(ev) => setTimer(ev.target.value)} />
      {runTimer && <Countdown onComplete={() => {setRunTimer(false)}}date={Date.now() + (parseInt(timer) * 1000)} autoStart={runTimer} />}
      <Button onClick={startTimer}>Start Game</Button>
    </Grid>
  </Grid>
  </>
}

export default DumbCharade;
