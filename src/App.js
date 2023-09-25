import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
//6c0e5343


const API_URL = 'http://www.omdbapi.com?apikey=6c0e5343';


const movie={
    
        "Title":"Superman, Spiderman or Batman",
        "Year": "2011",
        "imdbID": "tt2084949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
    
}


const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);



    const searchMovies= async (title) =>{
        const response = await fetch(`${API_URL}&S=${title}`);
        const data= await response.json();
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovies("Spiderman")

    },[]);

    return(
        <div className="app">
            <h1>Movie land</h1>
            <div className="search">
                <input 
                    placeholder="search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>

                    <img src={SearchIcon} alt="search" 
                    onClick={()=>searchMovies(searchTerm)}/>
                
            </div>
            {
                movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>no movies found</h2>
                    </div>
                )
            }


        </div>
    );
}
export default App;