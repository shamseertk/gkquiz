import { Box, TextField } from "@mui/material";
import { useState } from 'react'
import PageTitle from "../components/common/PageTitle";

const tryRequire = (path) => {
  try {
   return <img src={require(`../assets/images/${path}.jpg`)} width="300" alt="Spelling" />;
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
          }} label="Spelling" value={spelling} onChange={(evt) => setSpelling(evt.target.value)} />
    </Box>
    
    {tryRequire(spelling.toLowerCase())}
  </div>
}

export default SpellingGame;