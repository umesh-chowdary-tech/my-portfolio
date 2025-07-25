import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';
import pdfParse from 'pdf-parse';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());

const upload = multer({ dest: 'uploads/' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/upload-resume', upload.single('resume'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdfParse(dataBuffer);
    const resumeText = pdfData.text;

    const prompt = `
You are an AI resume parser. Given the following resume text, extract and return a JSON object with the following fields if present: name, title, summary, skills (array), experience (array of {company, role, years, description}), education (array of {degree, field, year}), certifications (array), interests (array). Only return valid JSON.

Resume:
${resumeText}
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 0.2,
    });

    let parsedData = {};
    try {
      const content = completion.choices[0].message.content;
      parsedData = JSON.parse(content.match(/\{[\s\S]*\}/)[0]);
    } catch (err) {
      parsedData = { error: 'Failed to parse AI response.' };
    }

    fs.unlink(filePath, () => {});
    res.json(parsedData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to process resume.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
}); 