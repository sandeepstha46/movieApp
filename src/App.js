import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TopRated from './pages/TopRated';
import TvShows from './pages/TvShows';
import Discovery from "./pages/Discovery";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";
import AuthComponent from "./components/AuthComponent";
import React from "react";

function App() {
    const authType = [{
        id: '0', url: '/login'
    }, {
        id: '1', url: '/register'
    }
    ];

  return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/Discovery" element={<Discovery />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Settings" element={<Settings />} />

          {authType.map((type) => (
              <Route path={type.url} element={<AuthComponent/>} key={type.url} />
          ))}

      </Routes>
  );
}

export default App;
