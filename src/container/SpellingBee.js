
import { Box } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { threeg } from "../data/spelling";

function SpellingBee() {
  return <div>
    <PageTitle title="Spelling Bee" />
    <Box>
      {threeg && threeg.map(word => <div>
        <audio jsname="QInZvb" preload="auto" controls> 
        <source src={`https://ssl.gstatic.com/dictionary/static/sounds/20200429/${word}--_us_1.mp3`} /> </audio>
        <a target="_blank"rel="noreferrer" href={`https://www.google.com/search?q=${word}+definition`} title="">{word}</a>
        </div>

      )}
    </Box>
  </div>
}

export default SpellingBee;