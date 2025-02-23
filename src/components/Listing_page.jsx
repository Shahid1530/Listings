
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
function Listing_page() {
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
<div>
  <section id="wsus__topbar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
          <ul className="wsus__topbar_left">
            <li><a href=""><i className="fal fa-envelope" aria-hidden="true" />
                support@websolutionus.com</a></li>
            <li><a href=""><i className="fal fa-phone-alt" aria-hidden="true" />111-233-1273</a></li>
          </ul>
        </div>
        <div className="col-xl-6 col-lg-5">
          <ul className="wsus__topbar_right">
            <li><a href=""><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
            <li><a href=""><i className="fab fa-twitter" aria-hidden="true" /></a></li>
            <li><a href=""><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
            <li>
              <a href="" className="fab fa-youtube" aria-hidden="true" />
            </li>
            <li>
              <a href="" className="fab fa-instagram" aria-hidden="true" />
            </li>
            <li className="language_login">
              <form id="setLanguageHeader" action="https://demo.websolutionus.com/dirlist/set-language">
                <select className="select_js" name="code" style={{"display":"none"}}>
                  <option value="en" selected>
                    English</option>
                  <option value="ar">
                    Arabic</option>
                </select><div className="nice-select select_js" tabIndex={0}><span className="current">
                    English</span><ul className="list"><li data-value="en" className="option selected">
                      English</li><li data-value="ar" className="option">
                      Arabic</li></ul></div>
              </form>
            </li>
            <li className="language_login currency">
              <form id="setCurrencyHeader" action="https://demo.websolutionus.com/dirlist/set-currency" >
                <select className="select_js" name="currency" style={{"display":"none"}}>
                  <option value="USD" selected>
                    $-USD</option>
                  <option value="NGN">
                    ₦-Naira</option>
                  <option value="INR">
                    ₹-Rupee</option>
                  <option value="PHP">
                    ₱-Peso</option>
                  <option value="CAD">
                    $-CAD</option>
                  <option value="BDT">
                    ৳-Taka</option>
                </select><div className="nice-select select_js" tabIndex={0}><span className="current">
                    $-USD</span><ul className="list"><li data-value="USD" className="option selected">
                      $-USD</li><li data-value="NGN" className="option">
                      ₦-Naira</li><li data-value="INR" className="option">
                      ₹-Rupee</li><li data-value="PHP" className="option">
                      ₱-Peso</li><li data-value="CAD" className="option">
                      $-CAD</li><li data-value="BDT" className="option">
                      ৳-Taka</li></ul></div>
              </form>
            </li>
            <li className="language_login">
              <a className="wsus__topbar_login" data-bs-toggle="modal" data-bs-target="#exampleModal" href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
  TOPBAR PART END
    ===========================*/}
  {/*==========================
  LOG IN POPUP START
    ===========================*/}
  <section id="wsus__login_popup">
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Forgot Password</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <form id="loginFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <button className="read_btn" id="loginSubmitBtn" type="submit"><i id="login-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Login</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <form id="registerFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="text" placeholder="Name *" name="name" />
                  <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <input type="password" placeholder="Confirm Password *" name="password_confirmation" />
                  <button id="registerBtn" className="read_btn" type="button"> <i id="reg-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Register</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <form id="forgetPassFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <button id="forgetPassBtn" className="read_btn" type="submit"><i id="forget-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Send Email</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
 LOG IN POPUP END
    ===========================*/}
  {/*==========================
     MENU PART START
    ===========================*/}
  <Navbar/>
  {/*==========================
     MENU PART END
    ===========================*/}
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-09-08-12-45-32-8135.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Listing</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Listing </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="listing_grid" className="list_view">
    <div className="container list_padding">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
          <form action="https://demo.websolutionus.com/dirlist/search-listing" method="GET">
            <div className="listing_grid_sidbar">
              <div className="sidebar_line">
                <input type="text" name="search" placeholder="Search..." defaultValue />
                <button type="submit"><i className="fas fa-search" aria-hidden="true" /></button>
              </div>
              <div className="sidebar_line_select">
                <select className="select_2 select2-hidden-accessible" name="category_slug" data-select2-id="select2-data-1-dslj" tabIndex={-1} aria-hidden="true">
                  <option value data-select2-id="select2-data-3-xd3n">All Categories</option>
                  <option value="apartments">
                    Apartments
                  </option>
                  <option value="house">
                    House
                  </option>
                  <option value="office">
                    Office
                  </option>
                  <option value="commercial">
                    Commercial
                  </option>
                  <option value="parking-lot">
                    Parking Lot
                  </option>
                  <option value="land">
                    Land
                  </option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-a889" style={{"width":"134.4px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-category_slug-st-container" aria-controls="select2-category_slug-st-container"><span className="select2-selection__rendered" id="select2-category_slug-st-container" role="textbox" aria-readonly="true" title="All Categories">All Categories</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              <div className="sidebar_line_select">
                <select className="select_2 select2-hidden-accessible" name="location" data-select2-id="select2-data-4-7lak" tabIndex={-1} aria-hidden="true">
                  <option value data-select2-id="select2-data-6-lcyx">All Location
                  </option>
                  <option value={2}>London
                  </option>
                  <option value={3}>Paris
                  </option>
                  <option value={4}>HongKong
                  </option>
                  <option value={5}>Moscow
                  </option>
                  <option value={6}>Tokyo
                  </option>
                  <option value={13}>California
                  </option>
                  <option value={14}>Florida
                  </option>
                  <option value={15}>Washington DC
                  </option>
                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-qpsj" style={{"width":"148px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-location-hl-container" aria-controls="select2-location-hl-container"><span className="select2-selection__rendered" id="select2-location-hl-container" role="textbox" aria-readonly="true" title="All Location
                                  ">All Location
                      </span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
              </div>
              <div className="wsus__pro_check">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="accepts-credit-cards" name="aminity[]" defaultValue={7} />
                  <label className="form-check-label" htmlFor="accepts-credit-cards">
                    Accepts Credit Cards
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="alcohol" name="aminity[]" defaultValue={4} />
                  <label className="form-check-label" htmlFor="alcohol">
                    Alcohol
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="bike-parking" name="aminity[]" defaultValue={3} />
                  <label className="form-check-label" htmlFor="bike-parking">
                    Bike Parking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="elevator-in-building" name="aminity[]" defaultValue={2} />
                  <label className="form-check-label" htmlFor="elevator-in-building">
                    Elevator In Building
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="free-coffee-and-tea" name="aminity[]" defaultValue={6} />
                  <label className="form-check-label" htmlFor="free-coffee-and-tea">
                    Free coffee and tea
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="good-for-kids" name="aminity[]" defaultValue={1} />
                  <label className="form-check-label" htmlFor="good-for-kids">
                    Good for kids
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="reservations" name="aminity[]" defaultValue={5} />
                  <label className="form-check-label" htmlFor="reservations">
                    Reservations
                  </label>
                </div>
              </div>
              <input type="hidden" id="page_type" name="page_type" defaultValue="list_view" />
              <button className="read_btn" type="submit">Search</button>
            </div></form>
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="wsus__property_topbar">
                <div className="wsus__property_topbar_left">
                  <ul>
                    <li><a className=" " href=""><i className="fas fa-th" aria-hidden="true" /></a></li>
                    <li><a className=" wsus_active_bar" href=""><i className="fas fa-list-ul" aria-hidden="true" /></a></li>
                  </ul>
                </div>
                <div className="wsus__property_topbar_right">
                  <div className="wp_search_area">
                    <select className="select_2 select2-hidden-accessible" name="state" id="sortingId" data-select2-id="select2-data-sortingId" tabIndex={-1} aria-hidden="true">
                      <option value={6} data-select2-id="select2-data-8-czqn">
                        Default Order</option>
                      <option value={1}>
                        Most Views</option>
                      <option value={2}>
                        Featured</option>
                      <option value={3}>
                        Verified</option>
                      <option value={4}>
                        Oldest Listing</option>
                      <option value={5}>
                        New Listing</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-7-m50k" style={{"width":"130.4px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-sortingId-container" aria-controls="select2-sortingId-container"><span className="select2-selection__rendered" id="select2-sortingId-container" role="textbox" aria-readonly="true" title="
                                              Default Order">
                            Default Order</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                  </div>
                </div>
              </div>
            </div>
            
            {products.map((product) => (
              <>
                 <div className="col-xl-12">
                 <div className="featured_listing_item_2 list_view">
                   <div className="featured_listing_item_img">
                     <img src={product.image} alt="listing" className="img-fluid w-100" />
                     <a className="green" href="">Featured</a>
                     <span className="love"><a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><i className="fas fa-heart" aria-hidden="true" /></a></span>
                     <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-72" href=""><i className="fal fas fa-eye" aria-hidden="true" /></a>
                   </div>
                   <div className="featured_listing_item_text">
                   
                    
                     <a className="title" href="">{product.name}</a>
                     <ul>
                       <li><i className="fas fa-phone-alt" aria-hidden="true" />
                         Call : {product.contact}</li>
                       <li><i className="fas fa-map-marker-alt" aria-hidden="true" /> {product.location}
                       </li>
                     
                     </ul>
                     <a className="future_verify" href=""><i className="far fa-star" aria-hidden="true" />
                       Featured</a>
                     <a className="future_verify red" href=""><i className="far fa-check" aria-hidden="true" />
                       Verified</a>
                   </div>
                 </div>
               </div>
              </>

          ))}
       
         
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-72" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Prime Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (212) 555-1234</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@primerealtyexample.com</a>
                              <p>Residential and commercial properties in prime locations.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-73" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Urban Nest Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (415) 555-5678</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@urbannestexample.com</a>
                              <p>Modern urban living spaces with top-notch amenities.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-74" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Luxury Living Estates</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (310) 555-7890</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@luxurylivingexample.com</a>
                              <p>Exclusive luxury homes and estates with premium features.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-75" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Green Acres Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (512) 555-2345</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@greenacresexample.com</a>
                              <p>Rural and farm properties with serene countryside views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-76" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Coastal Homes Real Estate</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (305) 555-5678</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@coastalhomesexample.com</a>
                              <p>Beachfront and coastal properties with stunning ocean views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-77" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Skyline Properties</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (312) 555-8901</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@skylinepropertiesexample.com</a>
                              <p>High-rise and city living with breathtaking cityscape views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
      <div className="footer_2_subscription_bg" style={{"background":"url('https://demo.websolutionus.com/dirlist/user/images/subscribe_bg.jpg')"}}>
        <div className="row">
          <div className="col-lg-6">
            <div className="footer_2_subs_text">
              <h2>Subscribe to Newsletter</h2>
              <p>Subscribe to get update and information. </p>
            </div>
          </div>
          <div className="col-lg-6">
            <form className="footer_2_subs_form" id="subscribeForm">
              <input id="subscribe_email" name="email" type="text" placeholder="Email address here" />
              <button className="common_btn_2" type="submit" id="subscribeBtn"> <i id="subscribe-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer_2_bg" style={{"background":"url('https://dirlist.websolutionus.com/user/images/footer_2_bg.jpg')"}}>
      <div className="footer_2_overlay">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_text">
                <a className="footer_logo" href="">
                  <img src="" alt />
                </a>
                <p>Lorem ipsum dolor sit amet, per mollis aeterno nostrud in, nam timeam fastidii eu. Commodo nonumes vim eu. Quo indoctum voluptatibus delicatissimi no. Eu cum dico melius. Cum impetus scribentur ad.</p>
                <ul className="footer_icon">
                  <ul className="footer_social">
                    <li><a href=""><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                    <li><a href=""><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    <li>
                      <a href=""><i className="fab fa-linkedin" aria-hidden="true" /></a>
                    </li>
                    <li>
                      <a href=""> <i className="fab fa-youtube" aria-hidden="true" /></a>
                    </li>
                    <li>
                      <a href=""> <i className="fab fa-instagram" aria-hidden="true" /></a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_text">
                <h3>Important Links</h3>
                <ul className="footer_link">
                  <li><a href="">
                      Home
                    </a></li>
                  <li><a href="">
                      Listings Categories
                    </a></li>
                  <li><a href="">
                      Listings
                    </a></li>
                  <li><a href="">
                      Blog
                    </a></li>
                  <li><a href="">
                      Pricing Plan
                    </a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_text footer_contact">
                <h3>Contact Us</h3>
                <ul className="footer_link">
                  <li>
                    <p>
                      <i className="far fa-map-marker-alt" aria-hidden="true" />
                      San Francisco City Hall, San Francisco, CA
                    </p>
                  </li>
                  <li>
                    <a href="">
                      <i className="fal fa-envelope" aria-hidden="true" />
                      support@websolutionus.com
                    </a>
                  </li><li>
                    <a href="">
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
            <ul className="footer_bottom_link">
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*==========================
   FOOTER PART END
    ===========================*/}
  {/*=============SCROLL BTN==============*/}
  <div className="scroll_btn " style={{"display":"none"}}>
    <i className="fas fa-chevron-up" aria-hidden="true" />
  </div>
  {/*=============SCROLL BTN==============*/}
</div>
</>
  )
}

export default Listing_page