import React, { useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";
export default function Nav() {
  const [movies, setMovies] = useContext(GlobalContext);
  return (
    <div>
      <h3>Dennis Omondi</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}
