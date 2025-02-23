import Navbar from "./Navbar";
function Aboutus() {
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-09-07-03-29-36-5355.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>About Us</h4>
            <nav style={{"--bs-breadcrumb-divider":"'>'"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="wsus__about_us">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-10">
          <div className="wsus__about_us_img">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="img_1">
                  <img src="" alt="About" className="img-fluid w-100" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="img_2">
                  <img src="" alt="About" className="img-fluid w-100" />
                </div>
                <div className="img_2 mt-4">
                  <img src="" alt="About" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 m-auto">
          <div className="wsus__about_us_text">
            <div className="wsus__section_heading">
              <h5>WHY CHOOSE US</h5>
              <h2> Find The Right <span>Selling</span> Option For You</h2>
            </div>
            <p style={{"margin":"22px 0px 0px","padding":"0px","outline":"0px","color":"var(--paraColor)","line-height":"27px","font-family":"Poppins, sans-serif"}}>Find the perfect selling option with our expert guidance, personalized service, and effective marketing strategies for your property.</p><ul style={{"margin":"35px 0px 60px","padding":"0px","outline":"0px","list-style":"none"}}><li style={{"color":"var(--paraColor)","font-family":"Poppins, sans-serif","margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}>Personalized consultations</li><li style={{"color":"var(--paraColor)","font-family":"Poppins, sans-serif","margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}>Expert market analysis</li><li style={{"color":"var(--paraColor)","font-family":"Poppins, sans-serif","margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}>Effective marketing strategies</li><li style={{"color":"var(--paraColor)","font-family":"Poppins, sans-serif","margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}>User-friendly platform</li><li style={{"color":"var(--paraColor)","font-family":"Poppins, sans-serif","margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}>Reach potential buyers easily</li><li style={{"margin":"15px 0px 0px","padding":"0px 0px 0px 32px","outline":"0px","position":"relative"}}></li></ul>
            <a href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
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
                <h3><span className="counter">100</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">500</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">120</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">300</span>+</h3>
                <p />
              </li>
            </ul>
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
          <h2>Our Customer <span>Feedback</span></h2>
        </div>
      </div>
    </div>
    <div className="row testi_slider_2 slick-initialized slick-slider"><div className="slick-list draggable"><div className="slick-track" style={{"opacity":"1","width":"996px","-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)"}}><div className="slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" style={{"width":"498px"}}><div><div className="col-xl-4" style={{"width":"100%","display":"inline-block"}}>
                <div className="wsus__single_testimonial_2">
                  <p className="rating">
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </p>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took.</p>
                  <div className="wsus__testimonial_footer">
                    <div className="img">
                      <img src="" alt="user" className="img-fluid" />
                    </div>
                    <h3>
                      Alice Victor
                      <span>Founder</span>
                    </h3>
                  </div>
                </div>
              </div></div></div><div className="slick-slide slick-active" data-slick-index={1} aria-hidden="false" style={{"width":"498px"}}><div><div className="col-xl-4" style={{"width":"100%","display":"inline-block"}}>
                <div className="wsus__single_testimonial_2">
                  <p className="rating">
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </p>
                  <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took.</p>
                  <div className="wsus__testimonial_footer">
                    <div className="img">
                      <img src="" alt="user" className="img-fluid" />
                    </div>
                    <h3>
                      Megan Malachi
                      <span>CEO</span>
                    </h3>
                  </div>
                </div>
              </div></div></div></div></div></div>
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
  <div className="scroll_btn ">
    <i className="fas fa-chevron-up" aria-hidden="true" />
  </div>
</div>
       </>
    )
}

export default Aboutus
