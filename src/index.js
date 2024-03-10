import mongoose from "mongoose";
import Express from "express";
import bodyParser from "body-parser";
import routers from "./routes/userRoutes.js";
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
  app.use(Express.json());
  app.use(Express.urlencoded({ extended: false }));
app.use('/api/users',routers);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} ..`);
});
