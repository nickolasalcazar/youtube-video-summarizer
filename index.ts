import { YoutubeTranscript, TranscriptResponse } from "youtube-transcript";

// Test Youtube video
const url = "https://www.youtube.com/watch?v=QkP4g9e86qA&ab_channel=exurb1a";

const getTranscript = async (url: string) => {
  const response: TranscriptResponse[] =
    await YoutubeTranscript.fetchTranscript(url).then();

  let transcript: string = "";

  // console.log(response);

  response.map((token) => {
    transcript += " " + token.text;
  });

  console.log(transcript);
};

getTranscript(url);

// console.log("Hello world");
