import express from "express";
import connectDB from "./connectDB/connectDB.js";
import dotenv from "dotenv";
import todoRoute from "./route/todoRoute.js";

//env
dotenv.config();
const app = express();

//middleware
app.use(express.json());

//route
app.use("/api/v1/todo", todoRoute);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server ");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listen to port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
