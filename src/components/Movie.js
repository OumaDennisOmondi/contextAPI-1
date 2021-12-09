import React from "react";

export default function Movie({ movie }) {
  return (
    <div>
      <hr />
      {movie.name} || {movie.price}
      <hr />
    </div>
  );
}
