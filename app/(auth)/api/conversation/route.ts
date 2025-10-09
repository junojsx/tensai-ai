import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai"; deprecated
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    const body = await request.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured", {
        status: 500,
      });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
    });
    return NextResponse.json({ result: response.choices[0].message });
  } catch (error) {
    console.log("Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
