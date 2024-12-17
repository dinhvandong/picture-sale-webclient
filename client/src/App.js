import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
import Test from './components/longth/Test';

import CatArtworks from './components/longth/CatArtworks';
//import PaintingDetailPage from './pages/PaintingDetailPage';
//import Test from './components/longth/Test';
// import PaitingPage from './pages/PaintingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<Test/>}/>

        
        <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery-tour" element={<GalleryTourPage />} />
        <Route path="/artist-vn" element={<ArtistVnPage />} />
        

      

      
      </Routes>
            
    </BrowserRouter>
  );
}

export default App;
