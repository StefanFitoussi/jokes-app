import mongoose, { model, models, Schema } from "mongoose";

const URI = `mongodb+srv://Stefan:${process.env.MONGODB_PASSWORD}@cluster0.70sm8ez.mongodb.net/?retryWrites=true&w=majority`;

const jokeSchema = new Schema({
  id: String,
  name: String,
  size: String,
  category: String,
  difficulty: String,
  image: String,
});

const Joke = models.Joke || model("Joke", jokeSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllJokes() {
  await connectDatabase();

  const jokes = await joke.find({}, { _id: false });
  return jokes;
}

export { getAllJokes };
Footer;
