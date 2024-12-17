import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
import HuyTqPage from './pages/HuyTqPage';
import PaintingPage from './pages/PaintingPage';
import DungTestPage from './pages/DungTestPage';
import LacquerArtworkPage from './pages/LacquerArtwork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/hai-long" element={<HomePage />} />

        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/gallery-tour" element={<GalleryTourPage />} />
        <Route path="/artist-vn" element={<ArtistVnPage />} />
        <Route path="/artist-vn/nguyen-van-huy" element={<HuyTqPage/>} />
        <Route path="/artwork/landscape-paintings" element={<PaintingPage/>} />
        <Route path="/chat-with-our-art-collector" element={<DungTestPage/>} />
        <Route path="/artist-vn/artist-lacquer-artwork" element={<LacquerArtworkPage/>} />

//LacquerArtworkPage
        {/* <Route path="/paiting-detail" element={<PaintingDetailPage />} /> */}
        

        {/* <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/confirm-code/:path" element={<ConfirmRegisterCodePage />} />
        <Route path="/confirm-account" element={<ConfirmRegistAccountPage />} />

        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/registration-success" element={<SignUpSuccessPage />} />
        <Route path="/forgot-password1" element={<ForgotPassword1Page />} />
        <Route path="/forgot-password2/:email" element={<ForgotPassword2Page />} />
        <Route path="/forgot-password3" element={<ForgotPassword3Page />} />
        <Route path="/my-booking" element={<MyBookingPage />} />
        <Route path="/my-booking2/:bookingCode" element={<MyBooking2Page />} />
        <Route path="/history-booking" element={<HistoryBookingPage />} />

        <Route path="/my-booking-import-excel/:bookingCode" element={<MyBookingImportExcelPage />} />

        <Route path="/my-booking3/:bookingCode" element={<MyBooking3Page />} />

        {/* <Route path="/admin/gallery/update/:id" element={<GalleryEditPage />} /> */}

        {/* <Route path="/booking-search/:bookingCode" element={<MyBookingSearchPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/galleryDetail/:id" element={<GalleryDetailPage />} />

        <Route path="/tiktok" element={<TiktokVideoPage />} />

        <Route path="/ancillary/:bookingCode" element={<AncillaryPage />} />
        <Route path="/payment-confirm/:bookingCode" element={<PaymentConfirmPage />} />
        <Route path="/booking-success/:bookingCode" element={<BookingSuccessfulPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notification-detail/:news" element={<NotificationDetailPage />} />

        <Route path="/menu" element={<MenuPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        <Route path="/term-condition" element={<TermConditionPage />} />
        <Route path="/plan-cruise/:id" element={<PlanCruisePage />} />
        <Route path="/profile-page" element={<ProfilePage />} />


        <Route path="/news" element={<NewsPage />} />
        <Route path="/news-detail/:id" element={<NewsDetailPage />} />

        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/promotion-detail/:id" element={<PromotionDetailPage />} />

        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/itinerary-detail/:id" element={<ItineraryDetailPage />} />

        <Route path="/select-your-cabin/flexible" element={<SelectCabinPage />} />
        <Route path="/select-your-cabin/non-refundable" element={<SelectCabinNonRefundPage />} />

        <Route path="/ambassador-suite" element={<AmbassadorSuitePage />} />  */}



      </Routes>
    </BrowserRouter>
  );
}

export default App;
