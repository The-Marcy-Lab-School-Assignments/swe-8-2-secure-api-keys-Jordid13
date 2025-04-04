//////////////////////////
// Imports
//////////////////////////

const { handleFetch } = require("./handleFetch");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, "../frontend/dist");
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);

const serveGifs = async (req, res, next) => {
  const { search } = req.query;

  const [data, error] = await handleFetch(
    search
      ? `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${process.env.API_KEY}`
      : `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${process.env.API_KEY}`
  );

  if (data) res.send(data);
  if (error) res.status(503).send(error);
};

//////////////////////////
// Endpoints
//////////////////////////

app.get("/api/gifs", serveGifs);

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
