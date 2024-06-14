const express = require("express");
const app = express();

app.use(express.json());

const uri =
  "mongodb+srv://tulasibora:scFjTvuH158Q2inD@cluster0.hqw5zil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//import mongoose

const mongoose = require("mongoose");
// connect

mongoose.connect(uri);

const db = mongoose.connection;

db.once("open", () => {
  console.log("db connected");
});

db.on("error", (error) => {
  console.log(error);
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "getting home page" });
});

const userRouter = require("./router/User");
app.use("/users", userRouter);

app.listen(5000);
console.log("Server is runnig");
