import { Router } from "express";
import axios  from "axios";
const routes = Router();

routes.get("/", async (req, res) => {
  try {
    
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`
    }
    const body = {
      ...req.body
    }
    const resc = await axios('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers,
      data: '{ "model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "What is the OpenAI mission?"}] }',
    })
    const response =
      await resc.data
    return res.json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

routes.post("/", async (req, res) => {
  try {
    const qs = req.query;
    console.log(qs);
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer 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`
    }
    const body = {
      ...req.body
    }
    const resc = await axios('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers,
      data: JSON.stringify(body),
    })
    

    const response =
      await resc.data
    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Sorry, something went wrong :/" });
  }
});

export default routes;
