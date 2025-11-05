import express from "express";
import fetch from "node-fetch";

const app = express();


app.get("/api/h2h", async (req, res) => {
  const baseUrl = "http://49.0.203.84:8081/api/h2h"; 

  
  const queryString = new URLSearchParams(req.query).toString();
  const url = `${baseUrl}?${queryString}`;

  try {
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader("Content-Type", "application/json");
    res.send(text);
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});


export default app;
