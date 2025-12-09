import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />

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

    {/* Footer Type 2 */}
    <footer id="footer" className="footer footer_type_2 bordered">
      <div className="footer-top container">
        <div className="block-newsletter">
          <h3 className="block__title">DON'T MISS THE CHANGE TO GET 40% OFF</h3>
          <p>Get the latest products and news update daily in fastest.</p>
          <form
            action="https://uomo-html.flexkitux.com/Demo9/index.html"
            className="block-newsletter__form"
          >
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email address"
            />
            <button className="btn btn-secondary fw-medium" type="submit">
              JOIN
            </button>
          </form>
        </div>
      </div>
      {/* /.footer-top container */}

      <div className="footer-middle container">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <div className="logo">
              <a href="index.html">
                <img
                  src="https://uomo-html.flexkitux.com/images/logo-dark-blue.png"
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </a>
            </div>
            {/* /.logo */}
            <p className="footer-address">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
            </p>

            <p className="m-0">
              <strong className="fw-medium">sale@uomo.com</strong>
            </p>
            <p>
              <strong className="fw-medium">+1 246-345-0695</strong>
            </p>

            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="footer__social-link d-block"
                >
                  <svg
                    className="svg-icon svg-icon_facebook"
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_facebook" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  className="footer__social-link d-block"
                >
                  <svg
                    className="svg-icon svg-icon_twitter"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_twitter" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  className="footer__social-link d-block"
                >
                  <svg
                    className="svg-icon svg-icon_instagram"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_instagram" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  className="footer__social-link d-block"
                >
                  <svg
                    className="svg-icon svg-icon_youtube"
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.pinterest.com/"
                  className="footer__social-link d-block"
                >
                  <svg
                    className="svg-icon svg-icon_pinterest"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_pinterest" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* /.footer-column */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Company</h6>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >About Us</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >Careers</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >Affiliates</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="blog_list1.html" className="menu-link menu-link_us-s"
                  >Blog</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="contact.html" className="menu-link menu-link_us-s"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          {/* /.footer-column */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Shop</h6>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a href="shop2.html" className="menu-link menu-link_us-s"
                  >New Arrivals</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="shop3.html" className="menu-link menu-link_us-s"
                  >Accessories</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="shop4.html" className="menu-link menu-link_us-s">Men</a>
              </li>
              <li className="sub-menu__item">
                <a href="shop5.html" className="menu-link menu-link_us-s">Women</a>
              </li>
              <li className="sub-menu__item">
                <a href="shop1.html" className="menu-link menu-link_us-s"
                  >Shop All</a
                >
              </li>
            </ul>
          </div>
          {/* /.footer-column */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Help</h6>
            <ul className="sub-menu__list list-unstyled">
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >Customer Service</a
                >
              </li>
              <li className="sub-menu__item">
                <a
                  href="account_dashboard.html"
                  className="menu-link menu-link_us-s"
                  >My Account</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="store_location.html" className="menu-link menu-link_us-s"
                  >Find a Store</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >Legal & Privacy</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="contact.html" className="menu-link menu-link_us-s"
                  >Contact</a
                >
              </li>
              <li className="sub-menu__item">
                <a href="about.html" className="menu-link menu-link_us-s"
                  >Gift Card</a
                >
              </li>
            </ul>
          </div>
          {/* /.footer-column */}

          <div className="footer-column mb-4 mb-lg-0">
            <h6 className="sub-menu__title text-uppercase">Opening Time</h6>
            <ul className="list-unstyled">
              <li><span className="menu-link">Mon - Fri: 8AM - 9PM</span></li>
              <li><span className="menu-link">Sat: 9AM - 8PM</span></li>
              <li><span className="menu-link">Sun: Closed</span></li>
            </ul>
          </div>
          {/* /.footer-column */}
        </div>
        {/* /.row-cols-5 */}
      </div>
      {/* /.footer-middle container */}

      <div className="footer-bottom">
        <div className="container d-md-flex align-items-center">
          <span className="footer-copyright me-auto">©2023 Uomo</span>
          <div className="footer-settings d-md-flex align-items-center">
            <select
              id="footerSettingsLanguage"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
            >
              <option className="footer-select__option" selected>
                United Kingdom | English
              </option>
              <option className="footer-select__option" value="1">
                United States | English
              </option>
              <option className="footer-select__option" value="2">German</option>
              <option className="footer-select__option" value="3">French</option>
              <option className="footer-select__option" value="4">Swedish</option>
            </select>

            <select
              id="footerSettingsCurrency"
              className="form-select form-select-sm bg-transparent border-0"
              aria-label="Default select example"
              name="store-language"
            >
              <option className="footer-select__option" selected>$ USD</option>
              <option className="footer-select__option" value="1">£ GBP</option>
              <option className="footer-select__option" value="2">€ EURO</option>
            </select>
          </div>
          {/* /.footer-settings */}
        </div>
        {/* /.container d-flex align-items-center */}
      </div>
      {/* /.footer-bottom container */}
    </footer>

    {/* Mobile Fixed Footer */}
    <footer className="footer-mobile container w-100 px-5 d-md-none bg-body">
      <div className="row text-center">
        <div className="col-4">
          <a
            href="https://uomo-html.flexkitux.com/"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <svg
              className="d-block"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_home" />
            </svg>
            <span>Home</span>
          </a>
        </div>
        {/* /.col-3 */}

        <div className="col-4">
          <a
            href="https://uomo-html.flexkitux.com/"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <svg
              className="d-block"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href="#icon_hanger" />
            </svg>
            <span>Shop</span>
          </a>
        </div>
        {/* /.col-3 */}

        <div className="col-4">
          <a
            href="https://uomo-html.flexkitux.com/"
            className="footer-mobile__link d-flex flex-column align-items-center"
          >
            <div className="position-relative">
              <svg
                className="d-block"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <use href="#icon_heart" />
              </svg>
              <span
                className="wishlist-amount d-block position-absolute js-wishlist-count"
                >3</span
              >
            </div>
            <span>Wishlist</span>
          </a>
        </div>
        {/* /.col-3 */}
      </div>
      {/* /.row */}
    </footer>
    {/* /.footer-mobile container position-fixed d-md-none bottom-0 */}

    {/* Customer Login Form */}
    <div
      className="aside aside_right overflow-hidden customer-forms"
      id="customerForms"
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        <div className="customer__login">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Login</h3>
            <button className="btn-close-lg js-close-aside ms-auto"></button>
          </div>
          {/* /.aside-header */}

          <form
            action="https://uomo-html.flexkitux.com/Demo9/login_register.html"
            method="POST"
            className="aside-content"
          >
            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control form-control_gray"
                id="customerNameEmailInput"
                placeholder="name@example.com"
              />
              <label for="customerNameEmailInput"
                >Username or email address *</label
              >
            </div>

            <div className="pb-3"></div>

            <div className="form-label-fixed mb-3">
              <label for="customerPasswordInput" className="form-label"
                >Password *</label
              >
              <input
                name="password"
                id="customerPasswordInput"
                className="form-control form-control_gray"
                type="password"
                placeholder="********"
              />
            </div>

            <div className="d-flex align-items-center mb-3 pb-2">
              <div className="form-check mb-0">
                <input
                  name="remember"
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-secondary"
                  for="flexCheckDefault"
                  >Remember me</label
                >
              </div>
              <a href="reset_password.html" className="btn-text ms-auto"
                >Lost password?</a
              >
            </div>

            <button className="btn btn-primary w-100 text-uppercase" type="submit">
              Log In
            </button>

            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">No account yet?</span>
              <a
                href="login_register.html#register-tab"
                className="btn-text js-show-register"
                >Create Account</a
              >
            </div>
          </form>
        </div>
        {/* /.customer__login */}

        <div className="customer__register">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Create an account</h3>
            <button
              className="btn-close-lg js-close-aside btn-close-aside ms-auto"
            ></button>
          </div>
          {/* /.aside-header */}

          <form
            action="https://uomo-html.flexkitux.com/Demo9/login_register.html"
            method="POST"
            className="aside-content"
          >
            <div className="form-floating mb-4">
              <input
                name="username"
                type="text"
                className="form-control form-control_gray"
                id="registerUserNameInput"
                placeholder="Username"
              />
              <label for="registerUserNameInput">Username</label>
            </div>

            <div className="pb-1"></div>

            <div className="form-floating mb-4">
              <input
                name="email"
                type="email"
                className="form-control form-control_gray"
                id="registerUserEmailInput"
                placeholder="user@company.com"
              />
              <label for="registerUserEmailInput">Email address *</label>
            </div>

            <div className="pb-1"></div>

            <div className="form-label-fixed mb-4">
              <label for="registerPasswordInput" className="form-label"
                >Password *</label
              >
              <input
                name="password"
                id="registerPasswordInput"
                className="form-control form-control_gray"
                type="password"
                placeholder="*******"
              />
            </div>

            <p className="text-secondary mb-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </p>

            <button className="btn btn-primary w-100 text-uppercase" type="submit">
              Register
            </button>

            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Already have account?</span>
              <a href="#" className="btn-text js-show-login">Login</a>
            </div>
          </form>
        </div>
        {/* /.customer__register */}
      </div>
      {/* /.customer-forms__wrapper */}
    </div>
    {/* /.aside aside_right */}

    {/* Cart Drawer */}
    <div className="aside aside_right overflow-hidden cart-drawer" id="cartDrawer">
      <div className="aside-header d-flex align-items-center">
        <h3 className="text-uppercase fs-6 mb-0">
          SHOPPING BAG (
          <span className="cart-amount js-cart-items-count">1</span> )
        </h3>
        <button
          className="btn-close-lg js-close-aside btn-close-aside ms-auto"
        ></button>
      </div>
      {/* /.aside-header */}

      <div className="aside-content cart-drawer-items-list">
        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <a href="product1_simple.html">
              <img
                loading="lazy"
                className="cart-drawer-item__img"
                src="https://uomo-html.flexkitux.com/images/cart-item-1.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">
              <a href="product1_simple.html">Zessi Dresses</a>
            </h6>
            <p className="cart-drawer-item__option text-secondary">Color: Yellow</p>
            <p className="cart-drawer-item__option text-secondary">Size: L</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  value="1"
                  min="1"
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$99</span>
            </div>
          </div>

          <button
            className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
          ></button>
        </div>
        {/* /.cart-drawer-item d-flex */}

        <hr className="cart-drawer-divider" />

        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <a href="product1_simple.html">
              <img
                loading="lazy"
                className="cart-drawer-item__img"
                src="https://uomo-html.flexkitux.com/images/cart-item-2.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">
              <a href="product1_simple.html">Kirby T-Shirt</a>
            </h6>
            <p className="cart-drawer-item__option text-secondary">Color: Black</p>
            <p className="cart-drawer-item__option text-secondary">Size: XS</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  value="4"
                  min="1"
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$89</span>
            </div>
          </div>

          <button
            className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
          ></button>
        </div>
        {/* /.cart-drawer-item d-flex */}

        <hr className="cart-drawer-divider" />

        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <a href="product1_simple.html">
              <img
                loading="lazy"
                className="cart-drawer-item__img"
                src="https://uomo-html.flexkitux.com/images/cart-item-3.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">
              <a href="product1_simple.html">Cableknit Shawl</a>
            </h6>
            <p className="cart-drawer-item__option text-secondary">Color: Green</p>
            <p className="cart-drawer-item__option text-secondary">Size: L</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  value="3"
                  min="1"
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$129</span>
            </div>
          </div>

          <button
            className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
          ></button>
        </div>
        {/* /.cart-drawer-item d-flex */}
      </div>
      {/* /.aside-content */}

      <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
        <hr className="cart-drawer-divider" />
        <div className="d-flex justify-content-between">
          <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
          <span className="cart-subtotal fw-medium">$176.00</span>
        </div>
        {/* /.d-flex justify-content-between */}
        <a href="shop_cart.html" className="btn btn-light mt-3 d-block"
          >View Cart</a
        >
        <a href="shop_checkout.html" className="btn btn-primary mt-3 d-block"
          >Checkout</a
        >
      </div>
      {/* /.aside-content */}
    </div>
    {/* /.aside */}

    {/* Sitemap */}
    <div className="modal fade" id="siteMap" tabindex="-1">
      <div className="modal-dialog modal-fullscreen">
        <div className="sitemap d-flex">
          <div className="w-50 d-none d-lg-block">
            <img
              loading="lazy"
              src="https://uomo-html.flexkitux.com/images/nav-bg.jpg"
              alt="Site map"
              className="sitemap__bg"
            />
          </div>
          {/* /.sitemap__bg w-50 d-none d-lg-block */}
          <div className="sitemap__links w-50 flex-grow-1">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active rounded-1 text-uppercase"
                      id="pills-item-1-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-1"
                      role="tab"
                      aria-controls="pills-item-1"
                      aria-selected="true"
                      >WOMEN</a
                    >
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link rounded-1 text-uppercase"
                      id="pills-item-2-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-2"
                      role="tab"
                      aria-controls="pills-item-2"
                      aria-selected="false"
                      >MEN</a
                    >
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link rounded-1 text-uppercase"
                      id="pills-item-3-tab"
                      data-bs-toggle="pill"
                      href="#pills-item-3"
                      role="tab"
                      aria-controls="pills-item-3"
                      aria-selected="false"
                      >KIDS</a
                    >
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn-close-lg"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="tab-content col-12" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-item-1"
                    role="tabpanel"
                    aria-labelledby="pills-item-1-tab"
                  >
                    <div className="row">
                      <ul
                        className="nav nav-tabs list-unstyled col-5 d-block"
                        id="myTab"
                        role="tablist"
                      >
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline active"
                            id="tab-item-1-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-1"
                            role="tab"
                            aria-controls="tab-item-1"
                            aria-selected="true"
                            ><span className="rline-content">WOMEN</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline"
                            id="tab-item-2-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-2"
                            role="tab"
                            aria-controls="tab-item-2"
                            aria-selected="false"
                            ><span className="rline-content">MAN</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a
                            className="nav-link nav-link_rline"
                            id="tab-item-3-tab"
                            data-bs-toggle="tab"
                            href="#tab-item-3"
                            role="tab"
                            aria-controls="tab-item-3"
                            aria-selected="false"
                            ><span className="rline-content">KIDS</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">HOME</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">COLLECTION</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline text-red" href="#"
                            >SALE UP TO 50% OFF</a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">NEW</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">SHOES</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">ACCESSORIES</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">JOIN LIFE</span></a
                          >
                        </li>
                        <li
                          className="nav-item position-relative"
                          role="presentation"
                        >
                          <a className="nav-link nav-link_rline" href="#"
                            ><span className="rline-content">#UOMOSTYLE</span></a
                          >
                        </li>
                      </ul>

                      <div className="tab-content col-7" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="tab-item-1"
                          role="tabpanel"
                          aria-labelledby="tab-item-1-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >New</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Best Sellers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Collaborations®</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Sets</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Denim</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jackets & Coats</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Overshirts</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Trousers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jeans</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Dresses</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Sweatshirts and Hoodies</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >T-shirts & Tops</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shirts & Blouses</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shorts and Bermudas</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shoes</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a
                                href="shop3.html"
                                className="menu-link menu-link_us-s"
                                >Accessories</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Bags</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a
                                href="about.html"
                                className="menu-link menu-link_us-s"
                                >Gift Card</a
                              >
                            </li>
                          </ul>
                          {/* /.sub-menu */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-item-2"
                          role="tabpanel"
                          aria-labelledby="tab-item-2-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Best Sellers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >New</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Sets</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Denim</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Collaborations®</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Trousers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jackets & Coats</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Overshirts</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Dresses</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jeans</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Sweatshirts and Hoodies</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a
                                href="about.html"
                                className="menu-link menu-link_us-s"
                                >Gift Card</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shirts & Blouses</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >T-shirts & Tops</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shorts and Bermudas</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a
                                href="shop3.html"
                                className="menu-link menu-link_us-s"
                                >Accessories</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shoes</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Bags</a
                              >
                            </li>
                          </ul>
                          {/* /.sub-menu */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-item-3"
                          role="tabpanel"
                          aria-labelledby="tab-item-3-tab"
                        >
                          <ul className="sub-menu list-unstyled">
                            <li className="sub-menu__item">
                              <a
                                href="about.html"
                                className="menu-link menu-link_us-s"
                                >Gift Card</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Collaborations®</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Sets</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Denim</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >New</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Best Sellers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Overshirts</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jackets & Coats</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Jeans</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Trousers</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shorts and Bermudas</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Shoes</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a
                                href="shop3.html"
                                className="menu-link menu-link_us-s"
                                >Accessories</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Dresses</a
                              >
                            </li>
                            <li className="sub-menu__item">
                              <a href="#" className="menu-link menu-link_us-s"
                                >Bags</a
                              >
                            </li>
                          </ul>
                          {/* /.sub-menu */}
                        </div>
                      </div>
                    </div>
                    {/* /.row */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-2"
                    role="tabpanel"
                    aria-labelledby="pills-item-2-tab"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    Elementum lectus a porta commodo suspendisse arcu, aliquam
                    lectus faucibus.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-item-3"
                    role="tabpanel"
                    aria-labelledby="pills-item-3-tab"
                  >
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt.
                    </p>
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur?
                  </div>
                </div>
              </div>
              {/* /.modal-body */}
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.sitemap__links w-50 flex-grow-1 */}
        </div>
      </div>
      {/* /.modal-dialog modal-fullscreen */}
    </div>
    {/* /.sitemap position-fixed w-100 */}

    {/* Quick View */}
    <div className="modal fade" id="quickView" tabindex="-1">
      <div className="modal-dialog quick-view modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="product-single">
            <div className="product-single__media m-0">
              <div className="product-single__image position-relative w-100">
                <div
                  className="swiper-container js-swiper-slider"
                  data-settings='{
                  "slidesPerView": 1,
                  "slidesPerGroup": 1,
                  "effect": "none",
                  "loop": false,
                  "navigation": {
                    "nextEl": ".modal-dialog.quick-view .product-single__media .swiper-button-next",
                    "prevEl": ".modal-dialog.quick-view .product-single__media .swiper-button-prev"
                  }
                }'
                >
                  <div className="swiper-wrapper">
                    <div className="swiper-slide product-single__image-item">
                      <img
                        loading="lazy"
                        src="https://uomo-html.flexkitux.com/images/products/quickview_1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide product-single__image-item">
                      <img
                        loading="lazy"
                        src="https://uomo-html.flexkitux.com/images/products/quickview_2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide product-single__image-item">
                      <img
                        loading="lazy"
                        src="https://uomo-html.flexkitux.com/images/products/quickview_3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="swiper-slide product-single__image-item">
                      <img
                        loading="lazy"
                        src="https://uomo-html.flexkitux.com/images/products/quickview_4.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="swiper-button-prev">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_sm" />
                    </svg>
                  </div>
                  <div className="swiper-button-next">
                    <svg
                      width="7"
                      height="11"
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_next_sm" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-single__detail">
              <h1 className="product-single__name">
                Lightweight Puffer Jacket With a Hood
              </h1>
              <div className="product-single__price">
                <span className="current-price">$449</span>
              </div>
              <div className="product-single__short-desc">
                <p>
                  Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                  elementum gravida nec dui. Aenean aliquam varius ipsum, non
                  ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                  aliquet magna posuere eget.
                </p>
              </div>
              <form name="addtocart-form" method="post">
                <div className="product-single__swatches">
                  <div className="product-swatch text-swatches">
                    <label>Sizes</label>
                    <div className="swatch-list">
                      <input type="radio" name="size" id="swatch-1" />
                      <label
                        className="swatch js-swatch"
                        for="swatch-1"
                        aria-label="Extra Small"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Extra Small"
                        >XS</label
                      >
                      <input type="radio" name="size" id="swatch-2" checked />
                      <label
                        className="swatch js-swatch"
                        for="swatch-2"
                        aria-label="Small"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Small"
                        >S</label
                      >
                      <input type="radio" name="size" id="swatch-3" />
                      <label
                        className="swatch js-swatch"
                        for="swatch-3"
                        aria-label="Middle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Middle"
                        >M</label
                      >
                      <input type="radio" name="size" id="swatch-4" />
                      <label
                        className="swatch js-swatch"
                        for="swatch-4"
                        aria-label="Large"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Large"
                        >L</label
                      >
                      <input type="radio" name="size" id="swatch-5" />
                      <label
                        className="swatch js-swatch"
                        for="swatch-5"
                        aria-label="Extra Large"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Extra Large"
                        >XL</label
                      >
                    </div>
                    <a
                      href="#"
                      className="sizeguide-link"
                      data-bs-toggle="modal"
                      data-bs-target="#sizeGuide"
                      >Size Guide</a
                    >
                  </div>
                  <div className="product-swatch color-swatches">
                    <label>Color</label>
                    <div className="swatch-list">
                      <input type="radio" name="color" id="swatch-11" />
                      <label
                        className="swatch swatch-color js-swatch"
                        for="swatch-11"
                        aria-label="Black"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Black"
                        style={{ color: "#222" }}
                      ></label>
                      <input type="radio" name="color" id="swatch-12" checked />
                      <label
                        className="swatch swatch-color js-swatch"
                        for="swatch-12"
                        aria-label="Red"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Red"
                        style={{color: "#c93a3e"}}
                      ></label>
                      <input type="radio" name="color" id="swatch-13" />
                      <label
                        className="swatch swatch-color js-swatch"
                        for="swatch-13"
                        aria-label="Grey"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Grey"
                        style={{color: "#e4e4e4"}}
                      ></label>
                    </div>
                  </div>
                </div>
                <div className="product-single__addtocart">
                  <div className="qty-control position-relative">
                    <input
                      type="number"
                      name="quantity"
                      value="1"
                      min="1"
                      className="qty-control__number text-center"
                    />
                    <div className="qty-control__reduce">-</div>
                    <div className="qty-control__increase">+</div>
                  </div>
                  {/* .qty-control */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-addtocart js-open-aside"
                    data-aside="cartDrawer"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
              <div className="product-single__addtolinks">
                <a href="#" className="menu-link menu-link_us-s add-to-wishlist"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_heart" /></svg
                  ><span>Add to Wishlist</span></a
                >
                <share-button className="share-button">
                  <button
                    className="menu-link menu-link_us-s to-share border-0 bg-transparent d-flex align-items-center"
                  >
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_sharing" />
                    </svg>
                  </button>
                  <details
                    id="Details-share-template__main"
                    className="m-1 xl:m-1.5"
                    hidden=""
                  >
                    <summary className="btn-solid m-1 xl:m-1.5 pt-3.5 pb-3 px-5">
                      +
                    </summary>
                    <div
                      id="Article-share-template__main"
                      className="share-button__fallback flex items-center absolute top-full left-0 w-full px-2 py-4 bg-container shadow-theme border-t z-10"
                    >
                      <div className="field grow mr-4">
                        <label className="field__label sr-only" for="url"
                          >Link</label
                        >
                        <input
                          type="text"
                          className="field__input w-full"
                          id="url"
                          value="https://uomo-crystal.myshopify.com/blogs/news/go-to-wellness-tips-for-mental-health"
                          placeholder="Link"
                          onclick="this.select();"
                          readonly=""
                        />
                      </div>
                      <button className="share-button__copy no-js-hidden">
                        <svg
                          className="icon icon-clipboard inline-block mr-1"
                          width="11"
                          height="13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 11 13"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2 1a1 1 0 011-1h7a1 1 0 011 1v9a1 1 0 01-1 1V1H2zM1 2a1 1 0 00-1 1v9a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 10V3h7v9H1z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <span className="sr-only">Copy link</span>
                      </button>
                    </div>
                  </details>
                </share-button>
                <script src="js/details-disclosure.js" defer="defer"></script>
                <script src="js/share.js" defer="defer"></script>
              </div>
              <div className="product-single__meta-info mb-0">
                <div className="meta-item">
                  <label>SKU:</label>
                  <span>N/A</span>
                </div>
                <div className="meta-item">
                  <label>Categories:</label>
                  <span>Casual & Urban Wear, Jackets, Men</span>
                </div>
                <div className="meta-item">
                  <label>Tags:</label>
                  <span>biker, black, bomber, leather</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.modal-dialog */}
    </div>
    {/* /.quickview position-fixed */}

    {/* Newsletter Popup */}
    <div
      className="modal fade"
      id="newsletterPopup"
      tabindex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog newsletter-popup modal-dialog-centered">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="row p-0 m-0">
            <div className="col-md-6 p-0 d-none d-md-block">
              <div className="newsletter-popup__bg h-100 w-100">
                <img
                  loading="lazy"
                  src="https://uomo-html.flexkitux.com/images/newsletter-popup.jpg"
                  className="h-100 w-100 object-fit-cover d-block"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 p-0 d-flex align-items-center">
              <div className="block-newsletter w-100">
                <h3 className="block__title">Sign Up to Our Newsletter</h3>
                <p>
                  Be the first to get the latest news about trends, promotions,
                  and much more!
                </p>
                <form
                  action="https://uomo-html.flexkitux.com/Demo9/index.html"
                  className="footer-newsletter__form position-relative bg-body"
                >
                  <input
                    className="form-control border-2"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                  />
                  <input
                    className="btn-link fw-medium bg-transparent position-absolute top-0 end-0 h-100"
                    type="submit"
                    value="JOIN"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /.newsletter-popup position-fixed */}

    {/* Go To Top */}
    <div id="scrollTop" className="visually-hidden end-0"></div>

    {/* Page Overlay */}
    <div className="page-overlay"></div>
    {/* /.page-overlay */}
    </>
  );
}

export default App;
