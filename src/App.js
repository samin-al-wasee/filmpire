import React from "react";
import { useEffect } from "react";

// API Key = 841b2a9e

const API_URL = "http://www.omdbapi.com?apikey=841b2a9e"

const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
};

const App = () => {
    return (
        <h1>FILMPIRE HOME</h1>
    );
};

export default App;