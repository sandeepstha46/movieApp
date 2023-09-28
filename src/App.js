import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TopRated from './pages/TopRated';
import TvShows from './pages/TvShows';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/tvShows" element={<TvShows />} />
      </Routes>
    </Router>
  );
}

export default App;
