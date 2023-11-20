import dotenv from "dotenv";
import { YoutubeTranscript, TranscriptResponse } from "youtube-transcript";

import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY, // This is also the default, can be omitted
});

// Test Youtube video
const url = "https://www.youtube.com/watch?v=QkP4g9e86qA&ab_channel=exurb1a";

const getSummary = async (transcript: string) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Summarize the following transcript of this YouTube video: ${transcript}`,
      },
    ],
  });

  // console.log(completion.choices[0]);
  return completion.choices[0].message.content;
};

const getTranscript = async (url: string) => {
  const response: TranscriptResponse[] =
    await YoutubeTranscript.fetchTranscript(url).then();
  let transcript: string = "";
  response.map((token) => {
    transcript += " " + token.text;
  });

  return transcript;
};

const getData = async () => {
  const transcript = await getTranscript(url);
  // console.log(transcript);
  const summary = await getSummary(transcript);
  console.log(summary);
};

getData();

// const summary = getSummary("arg");
// const summary = getSummary(transcript);
// console.log(summary);
