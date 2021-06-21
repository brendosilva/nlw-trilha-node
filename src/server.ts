import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Create new rote");
});

app.listen(3000, () => {
  console.log("Server is running");
});

