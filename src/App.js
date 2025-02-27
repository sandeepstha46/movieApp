import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TopRated from './pages/TopRated';
import TvShows from './pages/TvShows';
import Discovery from "./pages/Discovery";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/topRated" element={<TopRated />} />
          <Route path="/tvShows" element={<TvShows />} />
          <Route path="/Discovery" element={<Discovery />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
