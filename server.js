import express, { json } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import appRoutes from "./routes/index.js";
import path from "path";

const app = express();
app.use(express.static(path.resolve(__dirname, "Codi-project-frontend/build")));
const port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(json());

// connecting to database

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", () => {
    console.log("connected");
  })
  .on("e", (e) => {
    console.log(e);
  });

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "Codi-project-frontend/build", "index.html")
  );
});

app.use(appRoutes);
app.on("error", (e) => {
  console.log("your error", e);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
//listening to port

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
