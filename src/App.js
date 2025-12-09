import CartDrawer from './Components/CartDrawer';
import Footer from './Components/Footer';
import FooterMobile from './Components/FooterMobile';
import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import Main from './Components/Main';
import NewsLetter from './Components/NewsLetter';
import PageOverlay from './Components/PageOverlay';
import QuickView from './Components/QuickView';
import ScrollToTop from './Components/ScrollToTop';
import SiteMap from './Components/SiteMap';

function App() {
  return (
    <>
      <Header />

      <Main />

    {/* Footer Type 2 */}
      <Footer />

    {/* Mobile Fixed Footer */}
    <FooterMobile />
    {/* /.footer-mobile container position-fixed d-md-none bottom-0 */}

    {/* Customer Login Form */}
    <LoginForm />
    {/* /.aside aside_right */}

    {/* Cart Drawer */}
    <CartDrawer />
    {/* /.aside */}

    {/* Sitemap */}
    <SiteMap />
    {/* /.sitemap position-fixed w-100 */}

    {/* Quick View */}
    <QuickView />
    {/* /.quickview position-fixed */}

    {/* Newsletter Popup */}
    <NewsLetter />
    {/* /.newsletter-popup position-fixed */}

    {/* Go To Top */}
    <ScrollToTop  />

    {/* Page Overlay */}
    <PageOverlay />
    {/* /.page-overlay */}
    </>
  );
}

export default App;
