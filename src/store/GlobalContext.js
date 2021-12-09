import { useState, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [movies, setMovies] = useState([
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
  return (
    <GlobalContext.Provider value={[movies, setMovies]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
