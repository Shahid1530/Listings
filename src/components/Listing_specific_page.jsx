import Navbar from './Navbar'

function Listing_specific_page() {
  return (
    <>
    <div>
  <section id="wsus__topbar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
      
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
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <button className="read_btn" id="loginSubmitBtn" type="submit"><i id="login-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Login</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <form id="registerFormSubmit">
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="text" placeholder="Name *" name="name" />
                  <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <input type="password" placeholder="Confirm Password *" name="password_confirmation" />
                  <button id="registerBtn" className="read_btn" type="button"> <i id="reg-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Register</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <form id="forgetPassFormSubmit">
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/custom-images/listing-banner-2024-07-08-09-27-26-1024.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Prime Realty</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item"><a href="">
                    Listing </a></li>
                <li className="breadcrumb-item active" aria-current="page">Prime Realty</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==========================
                                                                                                                              BREADCRUMB PART END
                                                                                                                      ===========================*/}
  {/*==========================
                                                                                                                              LISTING DETAILS START
                                                                                                                          ===========================*/}
  <section id="listing_details">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="listing_details_text">
            <div className="listing_det_header">
              <div className="listing_det_header_img">
                <img src="" alt="logo" className="img-fluid w-100" />
              </div>
              <div className="listing_det_header_text">
                <h6>Prime Realty</h6>
                <p className="host_name">Hosted by <a href="">Admin</a>
                </p>
                <p className="rating">
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <b>0.0</b>
                  <span>(0 Reviews)</span>
                </p>
                <ul>
                  <li><a href=""><i className="far fa-check" aria-hidden="true" />
                      Verified</a></li>
                  <li><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fal fa-heart" aria-hidden="true" />
                      Add to Favorite</a></li>
                  <li><a href=""><i className="fal fa-eye" aria-hidden="true" /> 4</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="listing_det_text">
              <p>Prime Realty specializes in providing high-quality residential and commercial properties in the most sought-after locations. Whether  looking for a family home or a business space, we have the perfect property for you.</p>
            </div>
            <div className="listing_det_Photo">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <a className="venobox vbox-item" data-gall="gallery01" href="">
                    <img src="" alt="gallery1" className="img-fluid w-100" />
                    <div className="photo_overlay">
                      <i className="fal fa-plus" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="listing_det_location">
              <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="wsus__listing_review">
              <h4>Reviews <span>0</span></h4>
              <div className="wsus__total_rating">
                <h4>0.0</h4>
                <span>Out of 5.0</span>
                <p>
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                  <i className="fa fa-star-o" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="listing_details_sidebar">
            <div className="row">
              <div className="col-12">
                <div className="listing_det_side_address">
                  <a href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                    (212) 555-1234</a>
                  <a href=""><i className="fal fa-envelope" aria-hidden="true" />
                    info@primerealtyexample.com</a>
                  <p><i className="fal fa-map-marker-alt" aria-hidden="true" /> 123 Main Street</p>
                  <p><i className="fal fa-globe" aria-hidden="true" />http://www.primerealtyexample.com</p>
                  <ul>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="listing_det_side_contact">
                  <h5>Contact Here</h5>
                  <form id="listingAuthContactForm">
                    <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />
                    <input type="hidden" name="user_type" defaultValue={1} />
                    <input type="hidden" name="admin_id" defaultValue={1} />
                    <input type="text" placeholder="Name *" name="name" />
                    <input type="email" placeholder="Email *" name="email" />
                    <input type="text" placeholder="Phone " name="phone" />
                    <input type="text" placeholder="Subject *" name="subject" />
                    <textarea cols={3} rows={5} name="message" placeholder="Message *" defaultValue={""} />
                    <button id="listingAuthorContctBtn" type="submit" className="read_btn"><i id="listcontact-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                      Send Message</button>
                  </form>
                </div>
              </div>
              <div className="col-12">
                <div className="listing_det_side_add">
                  <h5>Recently Added</h5>
                  <div className="row">
                    <div className="col-xl-12 col-md-6 col-lg-12">
                      <div className="wsus__featured_single">
                        <a className="list_images" href="">
                          <img src="" alt="images" className="img-fluid w-100" />
                        </a>
                        <span className="love"><a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><i className="fas fa-heart" aria-hidden="true" /></a></span>
                        <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-77" href=""><i className="fal fas fa-eye" aria-hidden="true" /></a>
                        <div className="wsus__featured_single_text">
                          <span className="small_text green"><a href="">Office</a></span>
                          <p className="list_rating">
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <span>(0 Reviews)</span>
                          </p>
                          <h6><a href="">Skyline Properties</a>
                          </h6>
                          <p className="address">890 Skyline Ave</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-lg-12">
                      <div className="wsus__featured_single">
                        <a className="list_images" href="">
                          <img src="" alt="images" className="img-fluid w-100" />
                        </a>
                        <span className="love"><a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><i className="fas fa-heart" aria-hidden="true" /></a></span>
                        <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-76" href=""><i className="fal fas fa-eye" aria-hidden="true" /></a>
                        <div className="wsus__featured_single_text">
                          <span className="small_text red"><a href="">Commercial</a></span>
                          <p className="list_rating">
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <span>(0 Reviews)</span>
                          </p>
                          <h6><a href="">Coastal Homes Real Estate</a>
                          </h6>
                          <p className="address">567 Shoreline Dr</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-md-6 col-lg-12">
                      <div className="wsus__featured_single">
                        <a className="list_images" href="">
                          <img src="" alt="images" className="img-fluid w-100" />
                        </a>
                        <span className="love"><a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><i className="fas fa-heart" aria-hidden="true" /></a></span>
                        <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-75" href=""><i className="fal fas fa-eye" aria-hidden="true" /></a>
                        <div className="wsus__featured_single_text">
                          <span className="small_text purple"><a href="">Land</a></span>
                          <p className="list_rating">
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <i className="fa fa-star-o" aria-hidden="true" />
                            <span>(0 Reviews)</span>
                          </p>
                          <h6><a href="">Green Acres Realty</a>
                          </h6>
                          <p className="address">234 Countryside Road</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="wsus__login_popup">
    <div className="modal fade" id="cliaimModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Claim Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <form id="claimeFormId" action="https://demo.websolutionus.com/dirlist/send-claim" method="post">
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input required type="text" placeholder="Name *" name="name" />
                  <input required type="email" placeholder="Email *" name="email" />
                  <textarea required cols={3} rows={5} name="comment" placeholder="Claim" id="comment" defaultValue={""} />
                  <input type="hidden" name="listing_id" defaultValue={75} />
                  <button className="read_btn" id="claimSubmitBtn" type="submit">Send Claim</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </>
  )
}

export default Listing_specific_page