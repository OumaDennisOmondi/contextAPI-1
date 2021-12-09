import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { GlobalProvider } from "./store/GlobalContext";
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </GlobalProvider>
  );
}

export default App;
