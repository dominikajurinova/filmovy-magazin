import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Articles from './components/Articles';
import Movies from './components/Movies';
import Menu from './components/Menu';
import Movie from './components/Movie';

const App = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Filmový magazín</h1>
      </header>
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: ':id',
            element: <Movie />
          },
        ]
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);