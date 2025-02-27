import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";

dotenv.config();
const app = express();

app.use(express.static("."));

app.get("/api/projects", async (req, res) => {
  const response = await fetch("https://api.fillout.com/v1/api/forms/uQwEPrLfvJus/submissions", {
    headers: {
      Authorization: `Bearer ${process.env.FILLOUT_API}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("uhm im up i guess :P"));
