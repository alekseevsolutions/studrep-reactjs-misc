import './App.css'
import MovieCard from "./components/MovieCard.jsx"
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import {Routes, Route} from "react-router-dom"

function App() {
    const  movieNumber = 1;
    return (
        <div>
            <NavBar />
            <main className={"main-content"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
        </div>
    )
}

export default App
