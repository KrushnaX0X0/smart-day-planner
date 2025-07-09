import { GoogleGenerativeAI } from "@google/generative-ai";
 import {GoogleGenAI} from '@google/genai';




export default async function gemin( prompt ) {
 
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents:{prompt},
});
console.log(response.text);
}
