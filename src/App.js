import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// API Key = 841b2a9e

const API_URL = "http://www.omdbapi.com?apikey=841b2a9e"

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = response.json();
        data.then((value) => {
            setMovies(value.Search);
        }).catch((error) => {
            setMovies([]);
        });
        console.log(`The search for moves with the keyword "${title}" returned the following results: `);
        console.log(data);
    };

    useEffect(() => {
        searchMovie("batman");
    }, []);

    return (
        <div className="app">
            <h1>FILMPIRE</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value);}}
                />
                <img 
                    src={SearchIcon} 
                    alt="search-icon"
                    onClick={() => {searchMovie(searchTerm);}}
                />
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}
        </div>
    );
};

export default App;