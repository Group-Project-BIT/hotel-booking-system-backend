import mongoose from "mongoose";
import Express from "express";
import bodyParser from "body-parser";

const app = Express();

const DBURL = process.env.MONGODB_URL;
mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Mongo DB connected.");
  })
  .catch((err) => {
    console.log("DB connection error...", err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} ..`);
});
