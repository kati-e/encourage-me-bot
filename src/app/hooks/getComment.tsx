import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default async function getComment() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Generate a short but encouraging message to cheer me on! Keep it short, only 1 sentence please.",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  const comment = completion.choices[0].message.content;

  return comment;
}
