import React from 'react';

const SingleProductCard = ({title, price, description, image}) => {
  return (
    <>
      <div className="col-6 col-md-4 col-lg-3">
            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                <div
                    className="swiper-container background-img js-swiper-slider"
                    data-settings='{"resizeObserver": true}'
                >
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="product1_simple.html">
                        <img
                            loading="lazy"
                            src={ image }
                            width="330"
                            height="400"
                            alt="Colorful Jacket"
                            className="pc__img"
                        />
                        </a>
                    </div>
                    {/* /.pc__img-wrapper */}
                    <div className="swiper-slide">
                        <a href="product1_simple.html">
                        <img
                            loading="lazy"
                            src={ image }
                            width="330"
                            height="400"
                            alt="Colorful Jacket"
                            className="pc__img"
                        />
                        </a>
                    </div>
                    {/* /.pc__img-wrapper */}
                    <div className="swiper-slide">
                        <a href="product1_simple.html">
                        <img
                            loading="lazy"
                            src={ image }
                            width="330"
                            height="400"
                            alt="Colorful Jacket"
                            className="pc__img"
                        />
                        </a>
                    </div>
                    {/* /.pc__img-wrapper */}
                    </div>
                    <span className="pc__img-prev"
                    ><svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <use href="#icon_prev_sm" /></svg
                    ></span>
                    <span className="pc__img-next"
                    ><svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <use href="#icon_next_sm" /></svg
                    ></span>
                </div>
                <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                >
                    <svg
                    className="d-inline-blockk align-middle mx-2"
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <use href="#icon_cart" /></svg
                    ><span className="d-inline-block align-middle"
                    >Add To Cart</span
                    >
                </button>
                </div>

                <div className="pc__info position-relative">
                <p className="pc__category">Accessories</p>
                <h6 className="pc__title mb-2">
                    <a href="product1_simple.html">{title}</a>
                </h6>
                <div className="product-card__price d-flex">
                    <span className="money price">${price}</span>
                </div>

                <button
                    className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                    title="Add To Wishlist"
                >
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <use href="#icon_heart" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
    </>
  )
}

export default SingleProductCard
