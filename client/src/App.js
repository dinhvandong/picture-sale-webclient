import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
// import PaitingPage from './pages/PaintingPage';
import Toanjr from './components/toannv/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<Toanjr/>} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery-tour" element={<GalleryTourPage />} />
        <Route path="/artist-vn" element={<ArtistVnPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
