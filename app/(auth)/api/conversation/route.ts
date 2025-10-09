import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    const body = await request.json();
    const { messages } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    console.log("Error: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
