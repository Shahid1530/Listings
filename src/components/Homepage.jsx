import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import img from "./shahid.jpg" 
import img1 from "./KUMAR.jpg"
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
                  src= "https://teja12.kuikr.com/is/a/c/1200x500/gallery_images/original/cf62eb6be6bbd80.gif"
    

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Morampudi</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src="https://mightyhills.in/wp-content/uploads/2024/07/img13-1024x631.jpg"

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Mighty Hills</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= "https://is1-2.housingcdn.com/01c16c28/78bc2c00db3a9d55facfcc3102599d54/v0/fs/2_bhk_independent_house-for-sale-melakottaiyur-Chennai-others.jpg"

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Kakinada</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2021/5/TA/UW/ZD/53256000/d9-500x500.jpg"

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Danavaipeta</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_261,w_5000,h_2812,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/manjeera-international-convention-centre/DSC01131_qemapt"

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Main Road Rajahmundry</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipNuq-7zBgSt4zBQvyCGV6YLVUltMgFaPjdru8r8=s1360-w1360-h1020"

                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Dowlaiswaram</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src= "data:image/jpeg;base64,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 "
                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Prakasam Nagar</p>
                  <span>1 Listing</span>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-sm-6 col-lg-4">
              <a className="wsus__single_cities_2" href=" ">
                <img
                  src="https://www.deccanchronicle.com/h-upload/2025/01/01/1877835-apsrt.webp"


                  alt="cities"
                  className="img-fluid w-100"
                />
                <div className="text">
                  <p>Kotipalli Bus Stand</p>
                  <span>1 Listing</span>
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
                        src= " https://www.holidify.com/images/bgImages/RAJAHAMUNDRY.jpg"
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img_2">
                      <img
                        src= "https://images.trvl-media.com/lodging/17000000/16240000/16239000/16238972/2b766e53.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium "
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="img_2 mt-4">
                      <img
                        src= "https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?cs=srgb&dl=pexels-rafa-de-21730-3013440.jpg&fm=jpg"
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
                            src= {img}
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                         Shahid
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
                            src= {img1}
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                          Vinay Kumar
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
