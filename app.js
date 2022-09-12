const express = require("express");
const app = express();
const port = 3000;

const favoriteMovieList = ["Kiss Kiss Bang Bang", "Interstellar", "Get Out"];

function movieListStringer(arr) {
  let movieListString = "";
  for (let i = 0; i < arr.length; i++) {
    movieListString += arr[i];
    if (i < arr.length - 1) {
      movieListString += ", ";
    }
  }
  return movieListString;
}

app.get("/movie-list", (req, res) => {
  res.send(movieListStringer(favoriteMovieList));
});

app.get("/", (req, res) => {
  res.send(`my name is clayton, todays date is ${new Date()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
