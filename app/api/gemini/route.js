import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});


export const POST = async (req,res) => {
   const body = await req.json();
     const { userMessage } = body;
     console.log(userMessage)
  
    const prompt = `You are a Smart Day Planner AI assistant.

The user will give you a short sentence describing their day, such as:
- "I have to study"
- "Going to gym in evening"
- "Exam tomorrow"
- "Need to focus on work"

Your task is to generate a **structured daily plan** in valid **JSON** format.

✅ Output Format:
{
  "day_plan": [
    {
      "time": "08:00 AM",
      "topic": "Task title",
      "description": "What the user should do at that time"
    },
    ...
  ]
}

✅ Rules:
- Output only JSON. No extra text or greetings.
- Use 3 to 6 time slots between 6:00 AM and 10:00 PM.
- Format time in 12-hour format with AM/PM.
- Be logical and realistic based on the user input.
- Add productive tasks even if user input is short.

User Input: ${userMessage}`
   try {
     const response = await openai.chat.completions.create({
      model: "mistralai/mistral-7b-instruct",
      messages: [
        { role: "system", content: "You are a helpful planner assistant." },
        { role: "user", content: prompt },
      ],
    });

    const aiText = response.choices[0].message.content;

   return new Response(JSON.stringify({ plan: aiText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    
   } catch (error) {
    return Response.json({error})
   }
}