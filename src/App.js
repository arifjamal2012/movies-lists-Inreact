import React, { useState } from "react";
import "./styles.css";

const topMovies = {
  Bollywood: [
    { name: "Pather Panchali (1955)", rating: 8.5 },
    { name: "Raatchasan (2018)", rating: 8.5 },
    { name: "Hanky Panky (1979)", rating: 8.5 },
    { name: " Nayakan (1987)", rating: 8.5 },
    { name: "Anbe Sivam (2003)", rating: 8.5 }
  ],

  Hollywood: [
    { name: "The Shawshank Redemption (1994)", rating: 9.3 },
    { name: "The Godfather (1972)", rating: 9.2 },
    { name: "The Dark Knight (2008)", rating: 9.0 },
    { name: "The Godfather: Part II (1974)", rating: 9.0 },
    { name: "12 Angry Men (1957)", rating: 9.0 }
  ]
};

//const movielist = Object.keys(topMovies);

export default function App() {
  const [rating, setRating] = useState("Bollywood");
  function moviesHandler(lists) {
    setRating(lists);
  }

  return (
    <div className="App">
      <h1 style={{ color: "orange" }}>Top Rated Movies Lists</h1>
      <p>IMDB 5 top rated movies </p>
      <div>
        {Object.keys(topMovies).map((lists) => (
          <button
            onClick={() => moviesHandler(lists)}
            style={{
              fontSize: "25px",
              color: "Blue",
              backgroundColor: "yellow",
              borderColor: "red",
              margin: "20px",
              cursor: "pointer"
            }}
          >
            {lists}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {topMovies[rating].map((showlist) => (
            <li
              key={showlist.name}
              style={{
                listStyle: "none",
                padding: "20px",
                margin: "20px",
                border: "1px solid grey",
                width: "45%",
                marginLeft: "280px",
                backgroundColor: "lightgreen",
                borderRadius: "0.5rem"
              }}
            >
              <div>{showlist.name}</div>
              <div style={{ marginTop: "50px" }}>Rating:{showlist.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
