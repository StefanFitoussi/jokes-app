import { getAllJokes, createJoke } from "../../../helpers/db";

async function handler(request, response) {
  if (request.method === "GET") {
    const allJokes = await getAllJokes();
    response.status(200).json(allJokes);
  } else if (request.method === "POST") {
    const Joke = JSON.parse(request.body);
    console.log(Joke);
    const createdJoke = await createJoke(Joke);
    response.status(201).json(createdJoke);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("Only GET and POST allowed at this endpoint");
  }
}

export default handler;
