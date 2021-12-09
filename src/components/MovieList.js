import { useState, useContext } from "react";
import Movie from "./Movie";
import { GlobalContext } from "../store/GlobalContext";

export default function MovieList() {
  const [movies, setMovies] = useContext(GlobalContext);
  /*const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "KES 120",
      id: 1,
    },
    {
      name: "GAme of Thrones",
      price: "KES 130",
      id: 2,
    },
    {
      name: "Inception",
      price: "KES 100",
      id: 3,
    },
    {
      name: "Infinity War",
      price: "KES 220",
      id: 4,
    },
  ]);
  */
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
