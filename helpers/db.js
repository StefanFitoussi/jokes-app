import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://Stefan:${process.env.MONGODB_PASSWORD}@cluster0.70sm8ez.mongodb.net/?retryWrites=true&w=majority`;

const jokeSchema = new Schema({
  id: String,
  name: String,
  size: String,
  categories: [String],
  difficulty: String,
  image: String,
});

const Joke = models.Joke || model("Joke", jokeSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectDatabase();

  const jokes = await Joke.find({}, { _id: false });
  return jokes;
}

async function createJoke(joke) {
  await connectDatabase();

  const createdJoke = await Joke.create({
    ...joke,
    id: crypto.randomUUID(),
  });

  return {
    ...createdJoke.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

export { getAllJokes, createJoke };
