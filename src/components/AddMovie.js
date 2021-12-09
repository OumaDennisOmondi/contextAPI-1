import React, { useContext, useState } from "react";
import { GlobalContext } from "../store/GlobalContext";
export default function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(GlobalContext);
  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: Math.floor(Math.random() * 101) },
    ]);
  };
  return (
    <div>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
