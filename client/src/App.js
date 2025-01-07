import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
import HuyTqPage from './pages/HuyTqPage';
import PaintingPage from './pages/PaintingPage';
import DungTestPage from './pages/DungTestPage';
import LacquerArtworkPage from './pages/LacquerArtwork';
import PaintingDetailPage from './pages/PaintingDetailPage';
import { LanguageProvider } from './LanguageContext';
import AboutBody from './components/about-duc/AboutBody';
import SpecialCollectionPage from './pages/SpecialCollectionPage';
import PictureArtDetailPage from './pages/PictureArtDetailPage';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';
import HuyArtistDetailPage from './pages/HuyArtistDetailPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* homepage */}
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutBody />} />
          <Route path="/gallery-tour" element={<GalleryTourPage />} />
          <Route path="/artist-vn" element={<ArtistVnPage />} />
          <Route path="/artist-vn/Detail/:id" element={<HuyArtistDetailPage/>} />
          <Route path="/artist-vn/nguyen-van-huy" element={<HuyTqPage />} />
          <Route path="/artwork/landscape-paintings" element={<PaintingPage />} />
          <Route path="/chat-with-our-art-collector" element={<DungTestPage />} />
          <Route path="/artist-vn/artist-lacquer-artwork" element={<LacquerArtworkPage />} />
          <Route path="/picture-art-detail/:id" element={<PictureArtDetailPage />} />
          <Route path="/special" element={<SpecialCollectionPage />} />
          {/* Uncomment or modify other routes as needed */}
        </Routes>
        {/* Add the floating WhatsApp button so it appears on all pages */}
        <FloatingWhatsAppButton />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;