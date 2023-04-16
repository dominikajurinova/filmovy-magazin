import React from 'react';
import './style.css'; 
import { movies } from '../../movie-database';
import { useParams } from "react-router-dom";
//import blindsClosed from '../../img/blinds-closed.svg';


const Movie = () => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));

    return (
        <main> 
            <div className="">
                <h1>{movie.title}</h1>
                <img src={movie.poster} alt={movie.poster} />
                <ul>
                    <li>Year: {movie.year}</li>
                    <li>Director: {movie.director}</li>
                    <li>Rating: {movie.rating}</li>
                    <li>Genre: {movie.genre}</li>
                </ul>
                <p>{movie.storyline}</p>
            </div>
        </main>
    );
  };
  
export default Movie;