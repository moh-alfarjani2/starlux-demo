import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import HotelsPage from './app/hotels/page';
import HotelViewPage from './app/hotels/view/page';
import AdminDashboardPage from './app/admin/page';
import OwnerDashboardPage from './app/owner/page';
import DashboardPage from './app/dashboard/page';
import SettingsPage from './app/settings/page';
import BookingPage from './app/booking/page';
import ConfirmationPage from './app/confirmation/page';
import NotFound from './app/not-found';
import DashboardBookingsPage from './app/dashboard/bookings/page';
import DashboardFavoritesPage from './app/dashboard/favorites/page';
import DashboardProfilePage from './app/dashboard/profile/page';
import DashboardReviewsPage from './app/dashboard/reviews/page';
import OwnerBookingsPage from './app/owner/bookings/page';
import OwnerRoomsPage from './app/owner/rooms/page';
import AboutUsPage from './app/about/page';
import ContactPage from './app/contact/page';
import TermsPage from './app/terms/page';
import { DemoWarningModal } from './components/layout/demo-warning-modal';
import { ScrollToTop } from './components/layout/scroll-to-top';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <DemoWarningModal />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotels" element={<HotelsPage />} />
                <Route path="/hotels/view" element={<HotelViewPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/bookings" element={<DashboardBookingsPage />} />
                <Route path="/dashboard/favorites" element={<DashboardFavoritesPage />} />
                <Route path="/dashboard/profile" element={<DashboardProfilePage />} />
                <Route path="/dashboard/reviews" element={<DashboardReviewsPage />} />
                <Route path="/owner" element={<OwnerDashboardPage />} />
                <Route path="/owner/bookings" element={<OwnerBookingsPage />} />
                <Route path="/owner/rooms" element={<OwnerRoomsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
