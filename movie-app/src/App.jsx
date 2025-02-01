import './App.css'
import MovieCard from "./components/MovieCard.jsx"

function App() {
    const  movieNumber = 1;
    return (
      <>
          {movieNumber === 1 ? (
              <MovieCard movie={{title: "Dmitrii's Film", release_date: "2024"}}/>
              ) : (
              <MovieCard movie={{title: "Joe's Film", release_date: "2020"}}/>)
          }
      </>
    )
}

export default App
