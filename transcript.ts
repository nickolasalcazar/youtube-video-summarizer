import { YoutubeTranscript, TranscriptResponse } from "youtube-transcript";

/**
 * Given a URL to a YouTube video, returns a promise that resolves to a
 * transcript.
 *
 * @param {string} url
 */
export default async function getTranscript(url: string) {
  const response: TranscriptResponse[] =
    await YoutubeTranscript.fetchTranscript(url).then();
  let transcript: string = "";
  response.map((token) => {
    transcript += " " + token.text;
  });
  return transcript;
}
