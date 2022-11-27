import { Box, Button, TextField } from "@mui/material";
import { useState } from 'react'
import PageTitle from "../components/common/PageTitle";

const tryRequire = (path) => {
  try {
   return <img src={require(`../assets/images/${path.toLowerCase()}.jpg`)} width="300" alt="Spelling" />;
  } catch (err) {
   return false;
  }
};

function SpellingGame() {
  const [spelling, setSpelling] = useState('apple');
  return <div>
    <PageTitle title="Spelling Game" />
    <Box>
      <TextField
          InputProps={{
            style: { 
              color: "red",
              fontSize: "3rem",
              textTransform: "uppercase",
            },
          }} label="Spelling" value={spelling.toUpperCase()} onChange={(evt) => setSpelling(evt.target.value)} />
      <Button onClick={() => setSpelling('')}>Clear</Button>
    </Box>
    
    {tryRequire(spelling.toLowerCase())}
  </div>
}

export default SpellingGame;