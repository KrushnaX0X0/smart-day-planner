import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});


export const POST = async (req,res) => {
   const body = await req.json();
   const { userMessage } = await body.userMessage;;
  
    const prompt = `You are a smart day planner AI.

When a user gives a one-line summary of their day, generate a structured daily plan in valid JSON format.

Each item must include:
- time (like "09:00 AM")
- topic (short task title)
- description (what to do)

Return ONLY JSON in the format:
{
  "day_plan": [
    {
      "time": "09:00 AM",
      "topic": "Meeting",
      "description": "Discuss updates with the team."
    },
    ...
  ]
}

User Input: ${userMessage}`;
     
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