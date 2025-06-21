import { Box, Grid, Popover, TextField, Typography } from "@mui/material";
import { useState } from 'react'
import PageTitle from "../components/common/PageTitle";
import Keyboard from "../components/Keyboard";

const tryRequire = (path) => {
  try {
   return <img src={require(`../assets/images/${path.toLowerCase()}.jpg`)} width="300" alt="Spelling" />;
  } catch (err) {
   return false;
  }
};

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

function SpellingGame() {
  const [spelling, setSpelling] = useState('apple');
  const [anchorEIImgs, setAnchorElImgs] = useState(null);
  const reqCont = require.context('../assets/images/', false, /\.(jpg)$/ );
  const listImages = importAll(reqCont);
  //console.log(listImages);
  //console.log(Object.entries(listImages));
  const insertLetter = (letter) => {
    if(letter === 'BS') {
      setSpelling(spelling.slice(0, -1))
    } else if(letter === 'Clear') {
      setSpelling("")
    }else{
      setSpelling(spelling.concat(letter));
    }
  }     
    
  return <div>
    <PageTitle title="Spelling Game" />
    <Box>
      <Grid container>
        <Grid md={7}><TextField
          InputProps={{
            style: { 
              color: "red",
              fontSize: "3rem",
              textTransform: "uppercase",
            },
          }} label="Spelling" value={spelling.toUpperCase()} onChange={(evt) => setSpelling(evt.target.value)} />
        </Grid>
        <Grid md={5}>
           <Keyboard insertLetter={insertLetter} />
        </Grid>
      </Grid>
      
      <Typography onMouseLeave={() => setAnchorElImgs(null)} onMouseEnter={(evt) => setAnchorElImgs(evt.currentTarget)} >
        Hints
      </Typography>
      <Popover
        open={Boolean(anchorEIImgs)}
        anchorEl={anchorEIImgs}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
            pointerEvents: 'none',
        }}
        >
        <Box>
          {listImages && Object.entries(listImages).map(listImg => <img src={listImg[1]} alt={listImg[0]} height="50" />)}
        </Box>
      </Popover>
    </Box>
    {tryRequire(spelling.toLowerCase())}
  </div>
}

export default SpellingGame;