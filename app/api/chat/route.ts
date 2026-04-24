import portfolioData from "../../components/lib/portfolio-data";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST(request: Request) {
  try {
    const message = await request.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "Request Failed" }), {
        status: 400,
      });
    }

    const { text, usage } = await generateText({
      model: google("gemini-2.5-flash-lite"),
      maxOutputTokens: 70,
      system: portfolioData,
      messages: message,
    });

    const totalTokens = usage.totalTokens;

    console.log("Total Tokens:", totalTokens);
    console.log("response", text);

    // const text = "He jumps prety high!";

    return new Response(JSON.stringify({ reply: text }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
