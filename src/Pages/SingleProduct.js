import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import FooterMobile from '../Components/FooterMobile';
import LoginForm from '../Components/LoginForm';
import CartDrawer from '../Components/CartDrawer';
import SiteMap from '../Components/SiteMap';
import QuickView from '../Components/QuickView';
import NewsLetter from '../Components/NewsLetter';
import ScrollToTop from '../Components/ScrollToTop';
import PageOverlay from '../Components/PageOverlay';

const SingleProduct = () => {
    const { id } = useParams();
  return (
    <>
    <Header />
    </>
  )
}

export default SingleProduct;
