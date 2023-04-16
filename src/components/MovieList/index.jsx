import React from 'react';
import './style.css'; 
import { movies } from '../../movie-database';
import { Link } from "react-router-dom";



const MovieList = () => {

    return (
        <main> 
            <div className="movie-list">
               <h2>Movie List</h2>
               <ul>
               {movies.map((movie) => (
                <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
        ))}
                </ul> 
            </div>
        </main>
    );
  };
  
export default MovieList;