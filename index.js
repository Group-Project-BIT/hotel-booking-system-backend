import mongoose from "mongoose";
import Express from "express";
import bodyParser from "body-parser";

const app = Express();

const DBURL =
  "mongodb+srv://ashendeelakahhk:ashen2001@hotelcluster.hx5up4z.mongodb.net/?retryWrites=true&w=majority&appName=hotelCluster";

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("Mongo DB connected.");
  })
  .catch((err) => {
    console.log("DB connection error...", err);
  });

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} ..`);
});
