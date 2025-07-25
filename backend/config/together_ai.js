import Together from "together-ai";

const together = new Together(); // auth defaults to process.env.TOGETHER_API_KEY

const response = await together.chat.completions.create({
  messages: [
    {
      role: "user",
      content: "What are some fun things to do in New York?"
    }
  ],
  model: "Qwen/Qwen3-Coder-480B-A35B-Instruct-FP8"
});

console.log(response.choices[0].message.content)