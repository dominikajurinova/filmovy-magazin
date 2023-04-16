import React from 'react';
import './style.css'; 
import MovieList from '../../components/MovieList';
import { Outlet } from 'react-router-dom';
//import blindsClosed from '../../img/blinds-closed.svg';


const Movies = () => {

    return (
        <main> 
            <div className="movies-container">
               <MovieList />
               <Outlet /> 
            </div>
        </main>
    );
  };
  
export default Movies;