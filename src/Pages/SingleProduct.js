import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import FooterMobile from '../Components/FooterMobile';
import LoginForm from '../Components/LoginForm';
import CartDrawer from '../Components/CartDrawer';
import SiteMap from '../Components/SiteMap';
import QuickView from '../Components/QuickView';
import NewsLetter from '../Components/NewsLetter';
import ScrollToTop from '../Components/ScrollToTop';
import PageOverlay from '../Components/PageOverlay';
import SingleProductMain from '../Components/Products/SingleProductMain';

const SingleProduct = () => {
    const { id } = useParams();
  return (
    <>
    <Header />
    <SingleProductMain id={id} />
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
  )
}

export default SingleProduct;
