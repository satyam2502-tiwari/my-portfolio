export async function POST(req: Request) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1];

  const text = `I am a mock AI assistant! You said: "${lastMessage.content}". 

This is a live demonstration of the streaming Chat UI and the 5-message session limit guardrail! If you are a recruiter, I would love to connect. Please reach out via LinkedIn or email!`;
  
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      // Stream characters one by one to simulate typing
      for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 20));
        controller.enqueue(encoder.encode(`0:"${text[i]}"\n`));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "x-vercel-ai-data-stream": "v1",
    },
  });
}
