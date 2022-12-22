import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { v4 as uuidV4 } from "uuid";

const app = express();

app.use(bodyParser.json);

const schema = mongoose.Schema({
  name: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const sportsSchema = mongoose.model("sportsSchema", schema);

const DB_URL = "mongodb://localhost:27017/sports_db";
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/", async (req, res) => {
  const id = uuidV4();
  const { name } = req.body;

  //   const sport = new sportsSchema({ id, name });
  //   await sport.save();
  res.send(`posted : {name}`);
});

mongoose.set({ strictQuery: true });
mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.log(err.message);
    console.log("Connected to DB");
  }
);

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
