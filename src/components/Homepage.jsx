import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function Homepage() {
  const [products, setProducts] = useState([]);
 
    useEffect(() => {

      const fetchProducts = async () => {
        try {
          const response = await fetch("http://127.0.0.1:5000/api/products/");
          if (!response.ok) throw new Error("Failed to fetch products");
  
          const data = await response.json();
          setProducts(data);
          
        } catch (error) {
          console.log(error)
        }
      };
  
      fetchProducts();
    }, []);
    return (
      <>
       <>
     
          
        
      {/*==========================
  TOPBAR PART END
    ===========================*/}
      {/*==========================
  LOG IN POPUP START
    ===========================*/}
      <section id="wsus__login_popup">
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sign In
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Register
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Forgot Password
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <form id="loginFormSubmit">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                        autoComplete="off"
                      />
                      <input type="email" placeholder="Email *" name="email" />
                      <input
                        type="password"
                        placeholder="Password *"
                        name="password"
                      />
                      <button
                        className="read_btn"
                        id="loginSubmitBtn"
                        type="submit"
                      >
                        <i
                          id="login-spinner"
                          className="loading-icon fas fa-sync fa-spin d-none"
                          aria-hidden="true"
                        />
                        Login
                      </button>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <form id="registerFormSubmit">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                        autoComplete="off"
                      />
                      <input type="text" placeholder="Name *" name="name" />
                      <input type="email" placeholder="Email *" name="email" />
                      <input
                        type="password"
                        placeholder="Password *"
                        name="password"
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password *"
                        name="password_confirmation"
                      />
                      <button
                        id="registerBtn"
                        className="read_btn"
                        type="button"
                      >
                        <i
                          id="reg-spinner"
                          className="loading-icon fas fa-sync fa-spin d-none"
                          aria-hidden="true"
                        />
                        Register
                      </button>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <form id="forgetPassFormSubmit">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                        autoComplete="off"
                      />
                      <input type="email" placeholder="Email *" name="email" />
                      <button
                        id="forgetPassBtn"
                        className="read_btn"
                        type="submit"
                      >
                        <i
                          id="forget-spinner"
                          className="loading-icon fas fa-sync fa-spin d-none"
                          aria-hidden="true"
                        />
                        Send Email
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<Navbar/>
      <section
        className="wsus__banner_2"
        style={{
          background:
            'url("https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_261,w_5000,h_2812,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/manjeera-international-convention-centre/DSC01131_qemapt")',
        }}
      >
        <div className="wsus__banner_overlay_2">
          <div className="row">
            <div className="col-xxl-8 col-xl-10">
              <div className="wsus__banner_text_2">
                <h5>WELCOME TO RAJAHMUNDRY</h5>
                <h1>Find Your Perfect Place.</h1>
                <p>
                  Find your dream home or commercial space with our detailed
                  listings, high-quality images, and user-friendly interface.
                </p>
                <form
                  method="GET"
                  action="https://demo.websolutionus.com/dirlist/search-listing"
                >
                  <div className="row">
                    <div className="col-xl-3 col-sm-6 col-lg-3">
                      <div className="banner_input">
                        <input
                          type="text"
                          placeholder="What are you looking for?"
                          name="search"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-lg-3">
                      <select
                        className="select_2 select2-hidden-accessible"
                        name="category_slug"
                        data-select2-id="select2-data-1-f7sp"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-3-viii">
                          All Categories
                        </option>
                        <option value="apartments">Apartments</option>
                        <option value="house">House</option>
                        <option value="office">Office</option>
                        <option value="commercial">Commercial</option>
                        <option value="parking-lot">Parking Lot</option>
                        <option value="land">Land</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-srk2"
                        style={{ width: "134.4px" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-category_slug-1n-container"
                            aria-controls="select2-category_slug-1n-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-category_slug-1n-container"
                              role="textbox"
                              aria-readonly="true"
                              title="
                                          All Categories
                                      "
                            >
                              All Categories{" "}
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-lg-3">
                      <select
                        className="select_2 select2-hidden-accessible"
                        name="location"
                        data-select2-id="select2-data-4-1kp8"
                        tabIndex={-1}
                        aria-hidden="true"
                      >
                        <option value="" data-select2-id="select2-data-6-ua3k">
                          All Location
                        </option>
                        <option value={2}>London</option>
                        <option value={3}>Paris</option>
                        <option value={4}>HongKong</option>
                        <option value={5}>Moscow</option>
                        <option value={6}>Tokyo</option>
                        <option value={13}>California</option>
                        <option value={14}>Florida</option>
                        <option value={15}>Washington DC</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-5-lsnh"
                        style={{ width: 148 }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex={0}
                            aria-disabled="false"
                            aria-labelledby="select2-location-47-container"
                            aria-controls="select2-location-47-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-location-47-container"
                              role="textbox"
                              aria-readonly="true"
                              title="All Location"
                            >
                              All Location
                            </span>
                            <span
                              className="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation" />
                            </span>
                          </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                      </span>
                    </div>
                    <input
                      type="hidden"
                      name="page_type"
                      defaultValue="list_view"
                    />
                    <div className="col-xl-3 col-sm-6 col-lg-3">
                      <div className="search_button">
                        <button type="submit" className="common_btn_2">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__category_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="wsus__section_heading mb-4">
                <h5>CATEGORY</h5>
                <h2>
                  Explore <span>Category</span> Type
                </h2>
              </div>
            </div>
          </div>
          <div className="row category_2_slider slick-initialized slick-slider">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  width: 1320,
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  className="slick-slide slick-current slick-active"
                  data-slick-index={0}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          Apartments
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={1}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          House
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={2}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          Office
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={3}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          Commercial
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={4}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          Parking Lot
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slide slick-active"
                  data-slick-index={5}
                  aria-hidden="false"
                  style={{ width: 220 }}
                >
                  <div>
                    <div
                      className="col-xl-2"
                      style={{ width: "100%", display: "inline-block" }}
                    >
                      <div className="wsus__single_category_2">
                        <span>
                          <img
                            src= " "
                            alt="category"
                            className="img-fluid w-100"
                          />
                        </span>
                        <a className="title" href=" " tabIndex={0}>
                          Land
                        </a>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__popular_city_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="wsus__section_heading mb-4">
                <h5>Cities</h5>
                <h2>
                  Most Popular <span>Cities</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>London</p>
                  <span>1 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Paris</p>
                  <span>1 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>HongKong</p>
                  <span>1 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Moscow</p>
                  <span>1 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Tokyo</p>
                  <span>1 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>California</p>
                  <span>0 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Florida</p>
                  <span>0 listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= " "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Washington DC</p>
                  <span>0 listing</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__about_us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-10">
              <div className="wsus__about_us_img">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="img_1">
                      <img
                        src= " "
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img_2">
                      <img
                        src= " "
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="img_2 mt-4">
                      <img
                        src= " "
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-auto">
              <div className="wsus__about_us_text">
                <div className="wsus__section_heading">
                  <h5>WHY CHOOSE US</h5>
                  <h2>
                    Find The Right <span>Selling</span> Option For You
                  </h2>
                </div>
                <p
                  style={{
                    margin: "22px 0px 0px",
                    padding: 0,
                    outline: 0,
                    color: "var(--paraColor)",
                    lineHeight: 27,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Find the perfect selling option with our expert guidance,
                  personalized service, and effective marketing strategies for
                  your property.
                </p>
                <ul
                  style={{
                    margin: "35px 0px 60px",
                    padding: 0,
                    outline: 0,
                    listStyle: "none",
                  }}
                >
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Personalized consultations
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Expert market analysis
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Effective marketing strategies
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    User-friendly platform
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Reach potential buyers easily
                  </li>
                  <li
                    style={{
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    <font>Track your selling progress seamlessly</font>
                  </li>
                </ul>
                <a href=" ">
                  Read More
                  <i className="fal fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__counter_2">
        <div className="wsus__counter_2_overlay">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="d-flex flex-wrap">
                  <li>
                    <h3>
                      <span className="counter">100</span>+
                    </h3>
                    <p />
                  </li>
                  <li>
                    <h3>
                      <span className="counter">500</span>+
                    </h3>
                    <p />
                  </li>
                  <li>
                    <h3>
                      <span className="counter">120</span>+
                    </h3>
                    <p />
                  </li>
                  <li>
                    <h3>
                      <span className="counter">300</span>+
                    </h3>
                    <p />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured_listing_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 m-auto">
              <div className="wsus__section_heading mb-4">
                <h5>LISTING</h5>
                <h2>
                  Featured <span>Listing</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
          {products.map((product) => (
            <>
           <div className="col-xl-4 col-md-6">
           <div className="featured_listing_item_2">
             <div className="featured_listing_item_img">
               <img
                 src= {product.image}
                 alt="listing"
                 className="img-fluid w-100"
               />
               <a className="green" href=" ">
                 Featured
               </a>
              
               <a
                 className="map"
                 data-bs-toggle="modal"
                 data-bs-target="#listngPopUp-72"
                 href=" "
               >
                 <i className="fal fas fa-eye" aria-hidden="true" />
               </a>
             </div>
             <div className="featured_listing_item_text">
            
       
               <a className="title" href=" ">
                {product.name}
               </a>
               <ul>
                 <li>
                   <i className="fas fa-phone-alt" aria-hidden="true" /> Call
                   {product.contact}
                 </li>
                 <li>
                   <i className="fas fa-map-marker-alt" aria-hidden="true" />{" "}
                   {product.location}
                 </li>
                 
               </ul>
             </div>
           </div>
           <section id="wsus__map_popup">
             <div
               className="modal fade"
               id="listngPopUp-72"
               tabIndex={-1}
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
             >
               <div className="modal-dialog">
                 <div className="modal-content">
                   <button
                     type="button"
                     className="btn-close popup_close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                   >
                     <i className="far fa-times" aria-hidden="true" />
                   </button>
                   <div className="modal-body">
                     <div className="row">
                       <div className="col-12 col-xl-12 col-md-12">
                         <div className="map_popup_content">
                           <img
                             src= " "
                             alt="images"
                             className="img-fluid w-100"
                           />
                           <div className="map_popup_text">
                             <span>
                               <i
                                 className="far fa-star"
                                 aria-hidden="true"
                               />
                               Featured
                             </span>
                             <span className="red">
                               <i
                                 className="far fa-check"
                                 aria-hidden="true"
                               />
                               Verified
                             </span>
                             <h5>Prime Realty</h5>
                             <a className="call" href=" ">
                               <i
                                 className="fal fa-phone-alt"
                                 aria-hidden="true"
                               />
                               (212) 555-1234
                             </a>
                             <a className="mail" href=" ">
                               <i
                                 className="fal fa-envelope"
                                 aria-hidden="true"
                               />
                               info@primerealtyexample.com
                             </a>
                             <p>
                               Residential and commercial properties in prime
                               locations.
                             </p>
                             <a className="read_btn" href=" ">
                               Read More
                             </a>
                           </div>
                         </div>
                       </div>
                       <div className="col-12 col-xl-12 col-md-12">
                         <div className="map_popup_content_map">
                           <iframe
                             src= " "
                             width={600}
                             height={450}
                             style={{ border: 0 }}
                             allowFullScreen=""
                             loading="lazy"
                             referrerPolicy="no-referrer-when-downgrade"
                           />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
         </div>
         </>
          ))}
          
           
          </div>
        </div>
      </section>
      <section className="wsus__pricing wsus__pricing_page_2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="wsus__section_heading mb-4">
                <h5>PRICING</h5>
                <h2>
                  Our <span>Pricing</span> Packages
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="wsus__pricing_item">
                <h6>Free</h6>
                <h2>
                  $0.00
                  <span>30 Days</span>
                </h2>
                <ul>
                  <li>3 Listings Submission</li>
                  <li>30 Days Expiration</li>
                  <li>3 Aminities</li>
                  <li>3 Photos</li>
                  <li className="disable">0 Videos</li>
                  <li className="disable">Featured Listing Not Available</li>
                  <li className="disable">0 Featured Listing Submissions</li>
                </ul>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                  className="common_btn_2"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="wsus__pricing_item">
                <p>Popular</p>
                <h6>Premium</h6>
                <h2>
                  $315.99
                  <span>250 Days</span>
                </h2>
                <ul>
                  <li>200 Listings Submission</li>
                  <li>250 Days Expiration</li>
                  <li>Unlimited Aminities</li>
                  <li>Unlimited Photos</li>
                  <li className="">Unlimited Videos</li>
                  <li className="">Featured Listing Available</li>
                  <li className="">10 Featured Listing Submissions</li>
                </ul>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                  className="common_btn_2"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="wsus__pricing_item">
                <h6>Exclusive</h6>
                <h2>
                  $800.00
                  <span>Unlimited Days</span>
                </h2>
                <ul>
                  <li>Unlimited Listings Submission</li>
                  <li>Unlimited Days Expiration</li>
                  <li>Unlimited Aminities</li>
                  <li>Unlimited Photos</li>
                  <li className="">Unlimited Videos</li>
                  <li className="">Featured Listing Available</li>
                  <li className="">Unlimited Featured Listing Submissions</li>
                </ul>
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                  className="common_btn_2"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__testimonial_2">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="wsus__section_heading mb-4">
              <h5>TESTIMONIAL</h5>
              <h2>
                Our Customer <span>Feedback</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row testi_slider_2 slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 996,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: 498 }}
              >
                <div>
                  <div
                    className="col-xl-4"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="wsus__single_testimonial_2">
                      <p className="rating">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the when an unknown
                        printer took.
                      </p>
                      <div className="wsus__testimonial_footer">
                        <div className="img">
                          <img
                            src= " "
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                          Alice Victor
                          <span>Founder</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                data-slick-index={1}
                aria-hidden="false"
                style={{ width: 498 }}
              >
                <div>
                  <div
                    className="col-xl-4"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="wsus__single_testimonial_2">
                      <p className="rating">
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                        <i className="fas fa-star" aria-hidden="true" />
                      </p>
                      <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the when an unknown
                        printer took.
                      </p>
                      <div className="wsus__testimonial_footer">
                        <div className="img">
                          <img
                            src= " "
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                          Megan Malachi
                          <span>CEO</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wsus__blog_2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="wsus__section_heading mb-4">
                <h5>RECENT POSTS</h5>
                <h2>
                  Our Latest <span>News</span> Feed
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-6">
              <div className="wsus__single_blog_2">
                <div className="wsus__single_blog_2_img">
                  <img
                    src= " "
                    alt="blog"
                    className="img-fluid w-100"
                  />
                  <a className="green" href=" ">
                    Fitness
                  </a>
                </div>
                <div className="wsus__single_blog_2_text">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      Jul, 29 2021
                    </li>
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="user"
                          className="img-fluid"
                        />
                      </span>
                      By Admin
                    </li>
                  </ul>
                  <a href=" " className="title">
                    The Best Delicious Coffee Shop In Bangkok China.
                  </a>
                  <p>
                    Reducing unwanted wrinkles is a common goal for many
                    individuals seeking to maintain youthful and healthy-looking
                    skin. Fortunately, achieving smoother, more radiant skin
                    doesn&amp;#039;t always require elaborate treatments or
                    expensive products.
                  </p>
                  <a className="read_btn_2" href=" ">
                    Read More
                    <i className="fal fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-6">
              <div className="wsus__single_blog_2">
                <div className="wsus__single_blog_2_img">
                  <img
                    src= " "
                    alt="blog"
                    className="img-fluid w-100"
                  />
                  <a className="red" href=" ">
                    Event
                  </a>
                </div>
                <div className="wsus__single_blog_2_text">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      Jul, 29 2021
                    </li>
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="user"
                          className="img-fluid"
                        />
                      </span>
                      By Admin
                    </li>
                  </ul>
                  <a href=" " className="title">
                    Should Startups Care About Profitability?
                  </a>
                  <p>
                    Reducing unwanted wrinkles is a common goal for many
                    individuals seeking to maintain youthful and healthy-looking
                    skin. Fortunately, achieving smoother, more radiant skin
                    doesn&amp;#039;t always require elaborate treatments or
                    expensive products.
                  </p>
                  <a className="read_btn_2" href=" ">
                    Read More
                    <i className="fal fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-6">
              <div className="wsus__single_blog_2">
                <div className="wsus__single_blog_2_img">
                  <img
                    src= " "
                    alt="blog"
                    className="img-fluid w-100"
                  />
                  <a className="orange" href=" ">
                    Fitness
                  </a>
                </div>
                <div className="wsus__single_blog_2_text">
                  <ul className="d-flex flex-wrap">
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="icon"
                          className="img-fluid"
                        />
                      </span>
                      Jul, 29 2021
                    </li>
                    <li>
                      <span>
                        <img
                          src= " "
                          alt="user"
                          className="img-fluid"
                        />
                      </span>
                      By Admin
                    </li>
                  </ul>
                  <a href=" " className="title">
                    One Thing Separates Creators From Consumers
                  </a>
                  <p>
                    Reducing unwanted wrinkles is a common goal for many
                    individuals seeking to maintain youthful and healthy-looking
                    skin. Fortunately, achieving smoother, more radiant skin
                    doesn&amp;#039;t always require elaborate treatments or
                    expensive products.
                  </p>
                  <a className="read_btn_2" href=" ">
                    Read More
                    <i className="fal fa-long-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*==========================
   FOOTER PART START
    ===========================*/}
      <footer className="footer_2">
        <div className="container">
          <div
            className="footer_2_subscription_bg"
            style={{
              background:
                'url("https://demo.websolutionus.com/dirlist/user/images/subscribe_bg.jpg")',
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="footer_2_subs_text">
                  <h2>Subscribe to Newsletter</h2>
                  <p>Subscribe to get update and information. send spam!</p>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="footer_2_subs_form" id="subscribeForm">
                  <input
                    id="subscribe_email"
                    name="email"
                    type="text"
                    placeholder="Email address here"
                  />
                  <button
                    className="common_btn_2"
                    type="submit"
                    id="subscribeBtn"
                  >
                    <i
                      id="subscribe-spinner"
                      className="loading-icon fas fa-sync fa-spin d-none"
                      aria-hidden="true"
                    />
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer_2_bg"
          style={{
            background:
              'url("https://dirlist.websolutionus.com/user/images/footer_2_bg.jpg")',
          }}
        >
          <div className="footer_2_overlay">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="footer_text">
                    <a className="footer_logo" href=" ">
                      <img
                        src= " "
                        alt=""
                      />
                    </a>
                    <p>
                      Lorem ipsum dolor sit amet, per mollis aeterno nostrud in,
                      nam timeam fastidii eu. Commodo nonumes vim eu. Quo
                      indoctum voluptatibus delicatissimi no. Eu cum dico
                      melius. Cum impetus scribentur ad.
                    </p>
                    <ul className="footer_icon">
                      <ul className="footer_social">
                        <li>
                          <a href=" ">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fab fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fab fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i className="fab fa-youtube" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href=" ">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                  <div className="footer_text">
                    <h3>Important Links</h3>
                    <ul className="footer_link">
                      <li>
                        <a href=" "> Home </a>
                      </li>
                      <li>
                        <a href=" ">Listings Categories</a>
                      </li>
                      <li>
                        <a href=" ">Listings</a>
                      </li>
                      <li>
                        <a href=" "> Blog </a>
                      </li>
                      <li>
                        <a href=" ">Pricing Plan</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                  <div className="footer_text footer_contact">
                    <h3>Contact Us</h3>
                    <ul className="footer_link">
                      <li>
                        <p>
                          <i
                            className="far fa-map-marker-alt"
                            aria-hidden="true"
                          />
                          San Francisco City Hall, San Francisco, CA
                        </p>
                      </li>
                      <li>
                        <a href=" ">
                          <i className="fal fa-envelope" aria-hidden="true" />
                          support@websolutionus.com
                        </a>
                      </li>
                      <li>
                        <a href=" ">
                          <i className="fal fa-phone-alt" aria-hidden="true" />
                          111-233-1273
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>Copyright 2025, Websolutionus. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6">
                <ul className="footer_bottom_link" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*==========================
   FOOTER PART END
    ===========================*/}
      {/*=============SCROLL BTN==============*/}
      <div className="scroll_btn" style={{ display: "block" }}>
        <i className="fas fa-chevron-up" aria-hidden="true" />
      </div>
      {/*=============SCROLL BTN==============*/}
      {/*bootstrap js*/}
      {/*font-awesome js*/}
      <link rel="stylesheet" href=" " media="all" />
      <link rel="stylesheet" href=" " media="all" />
      {/*slick js*/}
      {/*venobox js*/}
      {/*counter js*/}
      {/*nice select js*/}
      {/*isotope js*/}
      {/*summer_note js*/}
      {/*main/custom js*/}
      <iframe
        name="stripeXDM_default884613_provider"
        id="stripeXDM_default884613_provider"
        aria-hidden="true"
        src= " "
        frameBorder={0}
        style={{ position: "absolute", top: "-2000px", left: 0 }}
      />
      <iframe
        src= " "
        frameBorder={0}
        scrolling="no"
        tabIndex={-1}
        aria-hidden="true"
        style={{
          width: "1px !important",
          height: "1px !important",
          position: "fixed !important",
          visibility: "hidden !important",
          pointerEvents: "none !important",
        }}
      />
    </></>
    )
}

export default Homepage
