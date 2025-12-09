import React from 'react'

const Main = () => {
  return (
    <>
      <main>
      <section
        className="swiper-container js-swiper-slider slideshow full-width_padding-20 slideshow-md"
        data-settings='{
        "autoplay": {
          "delay": 5000
        },
        "slidesPerView": 1,
        "effect": "fade",
        "loop": true,
        "pagination": {
          "el": ".slideshow-pagination",
          "type": "bullets",
          "clickable": true
        }
      }'
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/home/demo9/slider1.jpg"
                  width="1863"
                  height="700"
                  alt=""
                  className="slideshow-bg__img object-fit-cover object-position-right"
                />
              </div>
              <div
                className="slideshow-text container position-absolute start-50 top-50 translate-middle"
              >
                <h6
                  className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3"
                >
                  TRENDING 2023
                </h6>
                <h2
                  className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"
                >
                  Interior Designs
                </h2>
                <p className="animate animate_fade animate_btt animate_delay-6">
                  Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                  pulvinar in ipsum amet.
                </p>
                <a
                  href="shop1.html"
                  className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          {/* /.slideshow-item */}
          <div className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/home/demo9/slider1.jpg"
                  width="1863"
                  height="700"
                  alt=""
                  className="slideshow-bg__img object-fit-cover object-position-right"
                />
              </div>
              <div
                className="slideshow-text container position-absolute start-50 top-50 translate-middle"
              >
                <h6
                  className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3"
                >
                  TRENDING 2023
                </h6>
                <h2
                  className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"
                >
                  Interior Designs
                </h2>
                <p className="animate animate_fade animate_btt animate_delay-6">
                  Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                  pulvinar in ipsum amet.
                </p>
                <a
                  href="shop1.html"
                  className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          {/* /.slideshow-item */}
          <div className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/home/demo9/slider1.jpg"
                  width="1863"
                  height="700"
                  alt=""
                  className="slideshow-bg__img object-fit-cover object-position-right"
                />
              </div>
              <div
                className="slideshow-text container position-absolute start-50 top-50 translate-middle"
              >
                <h6
                  className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3"
                >
                  TRENDING 2023
                </h6>
                <h2
                  className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"
                >
                  Interior Designs
                </h2>
                <p className="animate animate_fade animate_btt animate_delay-6">
                  Lorem ipsum dolor sit amet, consectetur elit.<br />Odio
                  pulvinar in ipsum amet.
                </p>
                <a
                  href="shop1.html"
                  className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          {/* /.slideshow-item */}
          <div className="swiper-slide">
            <div className="overflow-hidden position-relative h-100">
              <div className="slideshow-bg">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/home/demo9/slider1.jpg"
                  width="1863"
                  height="700"
                  alt=""
                  className="slideshow-bg__img object-fit-cover object-position-right"
                />
              </div>
              <div
                className="slideshow-text container position-absolute start-50 top-50 translate-middle"
              >
                <h6
                  className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3"
                >
                  TRENDING 2023
                </h6>
                <h2
                  className="text-uppercase h1 fw-normal mb-0 animate animate_fade animate_btt animate_delay-5"
                >
                  Interior Designs
                </h2>
                <p className="animate animate_fade animate_btt animate_delay-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Odio
                  pulvinar in ipsum amet.
                </p>
                <a
                  href="shop1.html"
                  className="btn-link btn-link_sm default-underline text-uppercase fw-medium animate animate_fade animate_btt animate_delay-7"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          {/* /.slideshow-item */}
        </div>
        {/* /.slideshow-wrapper js-swiper-slider */}

        <div className="slideshow-pagination position-left-center"></div>
        {/* /.products-pagination */}
      </section>
      {/* /.slideshow */}

      <div className="mb-3 pb-1"></div>

      {/* Shop by collection */}
      <section className="collections-grid collections-grid_masonry gutters-20">
        <div className="h-md-100 full-width_padding-20">
          <div className="row h-md-100">
            <div className="col-lg-5 h-md-100">
              <div className="collection-grid__item position-relative h-md-100">
                <div
                  className="background-img"
                  style={{
                    backgroundImage: "url('https://uomo-html.flexkitux.com/images/home/demo9/collection_grid_1.jpg')",
                  }}
                ></div>
                <div
                  className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2"
                >
                  <h3 className="text-uppercase mb-0">Furniture</h3>
                  <p className="mb-3">954 Products</p>
                  <a
                    href="shop1.html"
                    className="btn-link default-underline text-uppercase fw-medium"
                    >Shop Now</a
                  >
                </div>
                {/* /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 */}
              </div>
            </div>
            {/* /.col-md-6 */}

            <div className="col-lg-7 d-flex flex-column">
              <div className="position-relative flex-grow-1">
                <div className="row h-md-100">
                  <div className="col-md-6 h-md-100">
                    <div
                      className="collection-grid__item h-md-100 position-relative"
                    >
                      <div
                        className="background-img"
                        style={{  
                          backgroundImage: "url('https://uomo-html.flexkitux.com/images/home/demo9/collection_grid_2.jpg')",
                        }}
                      ></div>
                      <div
                        className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2"
                      >
                        <h3 className="text-uppercase mb-0">Clocks</h3>
                        <p className="mb-3">710 Products</p>
                      </div>
                      {/* /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>

                  <div className="col-md-6 h-md-100">
                    <div
                      className="collection-grid__item h-md-100 position-relative"
                    >
                      <div
                        className="background-img"
                        style={{  
                          backgroundImage: "url('https://uomo-html.flexkitux.com/images/home/demo9/collection_grid_3.jpg')",
                        }}
                      ></div>
                      <div
                        className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2"
                      >
                        <h3 className="text-uppercase mb-0">Accessories</h3>
                        <p className="mb-3">954 Products</p>
                      </div>
                      {/* /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                </div>
              </div>

              <div className="position-relative flex-grow-1 mt-lg-3 pt-lg-1">
                <div className="row h-md-100">
                  <div className="col-md-6 h-md-100">
                    <div
                      className="collection-grid__item h-md-100 position-relative"
                    >
                      <div
                        className="background-img"
                        style={{  
                          backgroundImage: "url('https://uomo-html.flexkitux.com/images/home/demo9/collection_grid_4.jpg')",
  }}
                      ></div>
                      <div
                        className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2"
                      >
                        <h3 className="text-uppercase mb-0">Lighting</h3>
                        <p className="mb-3">184 Products</p>
                      </div>
                      {/* /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>

                  <div className="col-md-6 h-md-100">
                    <div
                      className="collection-grid__item h-md-100 position-relative"
                    >
                      <div
                        className="background-img"
                        style={{  
                          backgroundImage: "url('https://uomo-html.flexkitux.com/images/home/demo9/collection_grid_5.jpg')",
                        }}
                      ></div>
                      <div
                        className="content_abs content_top content_left content_top-md content_left-md pt-2 px-2"
                      >
                        <h3 className="text-uppercase mb-0">Toys</h3>
                        <p className="mb-3">245 Products</p>
                      </div>
                      {/* /.content_abs content_top content_left content_top-md content_left-md pt-2 px-2 */}
                    </div>
                    {/* /.collection-grid__item */}
                  </div>
                </div>
              </div>
            </div>
            {/* /.col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
      {/* /.collections-grid collections-grid_masonry */}

      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5"></div>

      <section className="products-carousel container">
        <h2
          className="section-title text-center fw-normal text-uppercase mb-1 mb-md-3 pb-xl-3"
        >
          Best Selling Products
        </h2>

        <ul
          className="nav nav-tabs mb-3 pb-3 mb-xl-4 text-uppercase justify-content-center"
          id="collections-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="collections-tab-1-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-1"
              role="tab"
              aria-controls="collections-tab-1"
              aria-selected="true"
              >All</a
            >
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-2-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-2"
              role="tab"
              aria-controls="collections-tab-2"
              aria-selected="true"
              >Featured</a
            >
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-3-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-3"
              role="tab"
              aria-controls="collections-tab-3"
              aria-selected="true"
              >Best Seller</a
            >
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="collections-tab-4-trigger"
              data-bs-toggle="tab"
              href="#collections-tab-4"
              role="tab"
              aria-controls="collections-tab-4"
              aria-selected="true"
              >Sales</a
            >
          </li>
        </ul>

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade show active"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Wooden Wall Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                        className="d-inline-block align-middle mx-2"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Gray Vintage Chair</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Small Gray Table</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Cableknit Shawl</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                      <a href="product1_simple.html">Black Vase</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Chest Of Drawers</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">White Table Lamp</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                      <a href="product1_simple.html">Minimal Circle Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                href="shop1.html"
                >See All Products</a
              >
            </div>
          </div>
          {/* /.tab-pane fade show*/}

          <div
            className="tab-pane fade show"
            id="collections-tab-2"
            role="tabpanel"
            aria-labelledby="collections-tab-2-trigger"
          >
            <div className="row">
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Gray Vintage Chair</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Small Gray Table</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Cableknit Shawl</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                      <a href="product1_simple.html">Black Vase</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Chest Of Drawers</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">White Table Lamp</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                      <a href="product1_simple.html">Minimal Circle Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Wooden Wall Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                href="shop1.html"
                >See All Products</a
              >
            </div>
          </div>
          {/* /.tab-pane fade show*/}

          <div
            className="tab-pane fade show"
            id="collections-tab-3"
            role="tabpanel"
            aria-labelledby="collections-tab-3-trigger"
          >
            <div className="row">
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Small Gray Table</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Cableknit Shawl</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                      <a href="product1_simple.html">Black Vase</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Chest Of Drawers</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">White Table Lamp</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                      <a href="product1_simple.html">Minimal Circle Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Wooden Wall Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Gray Vintage Chair</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                href="shop1.html"
                >See All Products</a
              >
            </div>
          </div>
          {/* /.tab-pane fade show*/}

          <div
            className="tab-pane fade show"
            id="collections-tab-4"
            role="tabpanel"
            aria-labelledby="collections-tab-4-trigger"
          >
            <div className="row">
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Cableknit Shawl</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-5-1.jpg"
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
                      <a href="product1_simple.html">Black Vase</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-6-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Chest Of Drawers</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-7-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">White Table Lamp</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-8-1.jpg"
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
                      <a href="product1_simple.html">Minimal Circle Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price price-old">$129</span>
                      <span className="money price price-sale">$99</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-1-1.jpg"
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
                      <a href="product1_simple.html">Wooden Wall Clock</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$29</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-2-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Gray Vintage Chair</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$62</span>
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                              src="https://uomo-html.flexkitux.com/images/home/demo9/product-3-1.jpg"
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
                    <p className="pc__category">Furniture</p>
                    <h6 className="pc__title mb-2">
                      <a href="product1_simple.html">Small Gray Table</a>
                    </h6>
                    <div className="product-card__price d-flex">
                      <span className="money price">$17</span>
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
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium"
                href="shop1.html"
                >See All Products</a
              >
            </div>
          </div>
          {/* /.tab-pane fade show*/}
        </div>
        {/* /.tab-content pt-2 */}
      </section>
      {/* /.products-grid */}

      <div className="mb-5 pb-4"></div>

      <section className="lookbook-products position-relative d-none d-md-block">
        <img
          className="w-100 h-auto"
          loading="lazy"
          src="https://uomo-html.flexkitux.com/images/home/demo9/lookbook-bg.jpg"
          width="1903"
          height="709"
          alt=""
        />
        <h2
          className="section-title position-absolute position-top-center fw-normal text-center"
          style={{top: "13.3%"}}
        >
          LIVING ROOM FURNITURE<br /><span className="h2 fw-normal"
            >Discount 50%</span
          >
        </h2>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "11%", top: "10%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{left: "11%", top:"55%"}}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "8%", top: "75%"}}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "49%", top: "66%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="top"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "67%", top: "50%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="left"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "88%", top: "79%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="left"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
      </section>

      <section className="lookbook-products position-relative d-block d-md-none">
        <img
          className="w-100 h-auto"
          loading="lazy"
          src="https://uomo-html.flexkitux.com/images/home/demo9/lookbook-bg-mobile.jpg"
          width="575"
          height="390"
          alt=""
        />
        <h2
          className="section-title position-absolute position-top-center fw-normal text-center"
          style={{ top: "13.3%" }}
        >
          LIVING ROOM FURNITURE<br /><span className="h2 fw-normal"
            >Discount 50%</span
          >
        </h2>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "7%", top: "35%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "7%", top: "65%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "7%", top: "75%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "49%" ,top: "74%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="top"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "69%", top: "59%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="left"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
        <button
          className="popover-point type2 position-absolute"
          style={{ left: "92%", top: "78%" }}
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-placement="left"
          data-bs-content='
        <div className="popover-product">
          <a href="product1_simple.html">
            <img loading="lazy" className="mb-3" src="https://uomo-html.flexkitux.com/images/home/demo9/product-10.jpg" alt="">
          </a>
          <p className="fw-medium mb-0"><a href="product1_simple.html">Cableknit Shawl</a></p>
          <p className="mb-0">$129</p>
        </div>
      '
        >
          <span>+</span>
        </button>
      </section>

      <div className="pt-1 pb-5 mt-4 mt-xl-5"></div>

      <section className="blog-carousel container">
        <h2
          className="section-title fw-normal text-center text-uppercase mb-3 pb-xl-3 mb-xl-3"
        >
          Latest News
        </h2>

        <div className="position-relative">
          <div
            className="swiper-container js-swiper-slider"
            data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 3,
            "slidesPerGroup": 3,
            "effect": "none",
            "loop": true,
            "breakpoints": {
              "320": {
                "slidesPerView": 1,
                "slidesPerGroup": 1,
                "spaceBetween": 14
              },
              "768": {
                "slidesPerView": 2,
                "slidesPerGroup": 2,
                "spaceBetween": 24
              },
              "992": {
                "slidesPerView": 3,
                "slidesPerGroup": 1,
                "spaceBetween": 30
              }
            }
          }'
          >
            <div className="swiper-wrapper blog-grid row-cols-xl-3">
              <div className="swiper-slide blog-grid__item mb-4">
                <div className="blog-grid__item-image">
                  <img
                    loading="lazy"
                    className="h-auto"
                    src="https://uomo-html.flexkitux.com/images/home/demo9/post1.jpg"
                    width="450"
                    height="300"
                    alt=""
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">By Admin</span>
                    <span className="blog-grid__item-meta__date"
                      >Aprial 05, 2023</span
                    >
                  </div>
                  <div className="blog-grid__item-title mb-0">
                    <a href="blog_single.html"
                      >Woman with good shoes is never be ugly place</a
                    >
                  </div>
                </div>
              </div>
              <div className="swiper-slide blog-grid__item mb-4">
                <div className="blog-grid__item-image">
                  <img
                    loading="lazy"
                    className="h-auto"
                    src="https://uomo-html.flexkitux.com/images/home/demo9/post2.jpg"
                    width="450"
                    height="300"
                    alt=""
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">By Admin</span>
                    <span className="blog-grid__item-meta__date"
                      >Aprial 05, 2023</span
                    >
                  </div>
                  <div className="blog-grid__item-title mb-0">
                    <a href="blog_single.html"
                      >What Freud Can Teach Us About Furniture</a
                    >
                  </div>
                </div>
              </div>
              <div className="swiper-slide blog-grid__item mb-4">
                <div className="blog-grid__item-image">
                  <img
                    loading="lazy"
                    className="h-auto"
                    src="https://uomo-html.flexkitux.com/images/home/demo9/post3.jpg"
                    width="450"
                    height="300"
                    alt=""
                  />
                </div>
                <div className="blog-grid__item-detail">
                  <div className="blog-grid__item-meta">
                    <span className="blog-grid__item-meta__author">By Admin</span>
                    <span className="blog-grid__item-meta__date"
                      >Aprial 05, 2023</span
                    >
                  </div>
                  <div className="blog-grid__item-title mb-0">
                    <a href="blog_single.html"
                      >Habitant morbi tristique senectus</a
                    >
                  </div>
                </div>
              </div>
            </div>
            {/* /.swiper-wrapper */}
          </div>
          {/* /.swiper-container js-swiper-slider */}
        </div>
        {/* /.position-relative */}
      </section>

      <div className="mb-5 pb-4 pb-xl-5 mb-xl-5"></div>

      <section className="brands-carousel container">
        <h2 className="d-none">Brands</h2>
        <div className="position-relative">
          <div
            className="swiper-container js-swiper-slider"
            data-settings='{
            "autoplay": {
              "delay": 5000
            },
            "slidesPerView": 7,
            "slidesPerGroup": 7,
            "effect": "none",
            "loop": true,
            "breakpoints": {
              "320": {
                "slidesPerView": 2,
                "slidesPerGroup": 2,
                "spaceBetween": 14
              },
              "768": {
                "slidesPerView": 4,
                "slidesPerGroup": 4,
                "spaceBetween": 24
              },
              "992": {
                "slidesPerView": 7,
                "slidesPerGroup": 1,
                "spaceBetween": 30,
                "pagination": false
              }
            }
          }'
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand1.png"
                  width="120"
                  height="20"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand2.png"
                  width="87"
                  height="20"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand3.png"
                  width="132"
                  height="22"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand4.png"
                  width="72"
                  height="21"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand5.png"
                  width="123"
                  height="31"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand6.png"
                  width="137"
                  height="22"
                  alt=""
                />
              </div>
              <div className="swiper-slide">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/brands/brand7.png"
                  width="94"
                  height="21"
                  alt=""
                />
              </div>
            </div>
            {/* /.swiper-wrapper */}
          </div>
          {/* /.swiper-container js-swiper-slider */}
        </div>
        {/* /.position-relative */}
      </section>
      {/* /.products-carousel container */}

      <div className="mb-3 mb-xl-5 pt-1 pb-4"></div>

      <section className="instagram px-1 position-relative full-width_padding-20">
        <h2 className="d-none">Instagram</h2>
        <div className="row row-cols-2 row-cols-md-4 row-cols-xl-8">
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta20.jpg"
                width="232"
                height="232"
                alt="Insta image 20"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta21.jpg"
                width="232"
                height="232"
                alt="Insta image 21"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta22.jpg"
                width="232"
                height="232"
                alt="Insta image 22"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta23.jpg"
                width="232"
                height="232"
                alt="Insta image 23"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta24.jpg"
                width="232"
                height="232"
                alt="Insta image 24"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta25.jpg"
                width="232"
                height="232"
                alt="Insta image 25"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta26.jpg"
                width="232"
                height="232"
                alt="Insta image 26"
              />
            </a>
          </div>
          <div className="instagram__tile">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="position-relative overflow-hidden d-block effect overlay-plus"
            >
              <img
                loading="lazy"
                className="instagram__img"
                src="https://uomo-html.flexkitux.com/images/instagram/insta27.jpg"
                width="232"
                height="232"
                alt="Insta image 27"
              />
            </a>
          </div>
        </div>
        <button
          className="btn position-absolute position-center fw-medium px-4 d-flex align-items-center gap-2"
        >
          <svg
            className="svg-icon svg-icon_instagram"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.125 3.2959C5.375 3.2959 3.98047 4.71777 3.98047 6.44043C3.98047 8.19043 5.375 9.58496 7.125 9.58496C8.84766 9.58496 10.2695 8.19043 10.2695 6.44043C10.2695 4.71777 8.84766 3.2959 7.125 3.2959ZM7.125 8.49121C6.00391 8.49121 5.07422 7.58887 5.07422 6.44043C5.07422 5.31934 5.97656 4.41699 7.125 4.41699C8.24609 4.41699 9.14844 5.31934 9.14844 6.44043C9.14844 7.58887 8.24609 8.49121 7.125 8.49121ZM11.1172 3.18652C11.1172 2.77637 10.7891 2.44824 10.3789 2.44824C9.96875 2.44824 9.64062 2.77637 9.64062 3.18652C9.64062 3.59668 9.96875 3.9248 10.3789 3.9248C10.7891 3.9248 11.1172 3.59668 11.1172 3.18652ZM13.1953 3.9248C13.1406 2.94043 12.9219 2.06543 12.2109 1.35449C11.5 0.643555 10.625 0.424805 9.64062 0.370117C8.62891 0.31543 5.59375 0.31543 4.58203 0.370117C3.59766 0.424805 2.75 0.643555 2.01172 1.35449C1.30078 2.06543 1.08203 2.94043 1.02734 3.9248C0.972656 4.93652 0.972656 7.97168 1.02734 8.9834C1.08203 9.96777 1.30078 10.8154 2.01172 11.5537C2.75 12.2646 3.59766 12.4834 4.58203 12.5381C5.59375 12.5928 8.62891 12.5928 9.64062 12.5381C10.625 12.4834 11.5 12.2646 12.2109 11.5537C12.9219 10.8154 13.1406 9.96777 13.1953 8.9834C13.25 7.97168 13.25 4.93652 13.1953 3.9248ZM11.8828 10.0498C11.6914 10.5967 11.2539 11.0068 10.7344 11.2256C9.91406 11.5537 8 11.4717 7.125 11.4717C6.22266 11.4717 4.30859 11.5537 3.51562 11.2256C2.96875 11.0068 2.55859 10.5967 2.33984 10.0498C2.01172 9.25684 2.09375 7.34277 2.09375 6.44043C2.09375 5.56543 2.01172 3.65137 2.33984 2.83105C2.55859 2.31152 2.96875 1.90137 3.51562 1.68262C4.30859 1.35449 6.22266 1.43652 7.125 1.43652C8 1.43652 9.91406 1.35449 10.7344 1.68262C11.2539 1.87402 11.6641 2.31152 11.8828 2.83105C12.2109 3.65137 12.1289 5.56543 12.1289 6.44043C12.1289 7.34277 12.2109 9.25684 11.8828 10.0498Z"
            ></path>
          </svg>
          <span>Instagram</span>
        </button>
      </section>
      {/* /.instagram container */}

      <div className="mb-3 mb-xl-5"></div>

      <div className="service-promotion horizontal container">
        <div className="row">
          <div
            className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3"
          >
            <div className="service-promotion__icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_shipping" />
              </svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">
                Fast And Free Delivery
              </h3>
              <p className="service-promotion__content text-secondary mb-0">
                Free delivery for all orders over $140
              </p>
            </div>
          </div>
          {/* /.col-md-4 text-center*/}

          <div
            className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3"
          >
            <div className="service-promotion__icon">
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_headphone" />
              </svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">
                24/7 Customer Support
              </h3>
              <p className="service-promotion__content text-secondary mb-0">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          {/* /.col-md-4 text-center*/}

          <div
            className="col-md-4 mb-5 mb-md-0 d-flex align-items-center justify-content-center gap-3"
          >
            <div className="service-promotion__icon">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_shield" />
              </svg>
            </div>
            <div className="service-promotion__content-wrap">
              <h3 className="service-promotion__title h6 text-uppercase mb-1">
                Money Back Guarantee
              </h3>
              <p className="service-promotion__content text-secondary mb-0">
                We return money within 30 days
              </p>
            </div>
          </div>
          {/* /.col-md-4 text-center*/}
        </div>
        {/* /.row */}
      </div>
      {/* /.service-promotion container */}

      <div className="mb-3 mb-xl-5"></div>
    </main>
    </>
  )
}

export default Main;
