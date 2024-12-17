import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
import Test from './components/quanhm/Test';
// import PaintingDetailPage from './pages/PaintingDetailPage';
// import PaitingPage from './pages/PaitingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery-tour" element={<GalleryTourPage />} />
        <Route path="/artist-vn" element={<ArtistVnPage />} />
       


      </Routes>
    </BrowserRouter>
  );
}

export default App;
