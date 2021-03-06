import express, { json } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import bodyParser from "body-parser";
import appRoutes from "./routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  express.static(path.resolve(__dirname, "./Codi-project-frontend/build"))
);
const port = process.env.PORT || 4000;
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

if (process.env.NODE_ENV == "production") {
  app.use(
    express.static(path.resolve(__dirname, "./Codi-project-frontend/build"))
  );
}
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "./Codi-project-frontend/build", "index.html")
  );
});
