import express from "express";
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("server ");
});

app.listen(PORT, () => {
  console.log(`listen to port ${PORT}`);
});
