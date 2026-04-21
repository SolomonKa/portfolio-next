import { config } from "dotenv";
config({ path: ".env.local" });

import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { z } from "zod";

const AiChat = async () => {
  try {
    const result = await generateText({
      model: google("gemini-2.5-flash-lite"),
      prompt:
        "Get weather of Tbilisi and Rustavi in Georgia and add their temperature together",
      maxOutputTokens: 150,
      maxSteps: 3,
      tools: {
        addNumbers: {
          description: "Add 2 numbers together",
          inputSchema: z.object({
            num1: z.number(),
            num2: z.number(),
          }),
          execute: async ({ num1, num2 }) => {
            return num1 + num2;
          },
        },
        getWeather: {
          description: "Get the current wether of the city",
          inputSchema: z.object({
            city: z.string(),
          }),
          execute: async ({ city }) => {
            return { city };
          },
        },
      },
    });
    console.log("---AI Response---");
    // console.log(result.text);
    console.log(result.steps);
  } catch (err) {
    console.error(err);
  }
};

export default AiChat;

AiChat();

//npx tsx app/components/ai/chatBot.ts
