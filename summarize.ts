import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

/**
 * Given a string, returns a promise that resolves to summary of the string.
 *
 * @param {string} transcript
 */
export default async function getSummary(transcript: string) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Summarize the following transcript of this YouTube video: ${transcript}`,
      },
    ],
  });
  return completion.choices[0].message.content;
}
