import getTranscript from "./transcript";
import getSummary from "./summarize";

// Test Youtube video
const url = "https://www.youtube.com/watch?v=QkP4g9e86qA&ab_channel=exurb1a";

const getData = async () => {
  const transcript = await getTranscript(url);
  const summary = await getSummary(transcript);
  console.log(summary);
};

getData();
