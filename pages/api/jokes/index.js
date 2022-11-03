import data from "../../../db.json";

console.log(data);

function handler(request, response) {
  if (request.method === "GET") {
    const allJokes = data;
    response.status(200).json(allJokes);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET"])
      .send("Only GET allowed at this endpoint");
  }
}

export default handler;

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export { fetcher };
