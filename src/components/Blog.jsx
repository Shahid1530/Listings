import Navbar from "./Navbar";
function Blog() {
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
  {/*==========================
          BREADCRUMB PART START
          ===========================*/}
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-49-24-9055.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Blog</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog </li>
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
               BLOG PART START
          ===========================*/}
  <section id="blog_part">
    <div className="blog_part_overlay">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="green" href="">Lifestyle</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">Simple Ways To Reduce Your Unwanted Wrinkles!</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin  always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="red" href="">Lifestyle</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">10 Reasons To Start Your Own, Profitable Website!</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin doesn&amp;amp;amp;#039;t always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="orange" href="">Fitness</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">9 Things I Love About Shaving My Head During Quarantine</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin doesn&amp;#039;t always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="green" href="">Fitness</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">Level up your live streams with automated captions and more</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin doesn&amp;#039;t always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="red" href="">Lifestyle</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">Apple iMac with Retina 5K display review</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin doesn&amp;#039;t always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src="" alt="blog" className="img-fluid w-100" />
                <a className="orange" href="">Lifestyle</a>
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                    <span>
                      <img src="" alt="icon" className="img-fluid" />
                    </span>
                    Oct, 18 2021
                  </li>
                  <li>
                    <span>
                      <img src="" alt="user" className="img-fluid" />
                    </span>
                    By Admin
                  </li>
                </ul>
                <a href="" className="title">A Skin Cream That’s Proven To Work in Skin</a>
                <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin doesn&amp;amp;#039;t always require elaborate treatments or expensive products.</p>
                <a className="read_btn_2" href="">Read More <i className="fal fa-long-arrow-right" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div id="pagination">
              <nav aria-label>
                <ul className="pagination">
                  <li className="page-item active" aria-current="page">
                    <a className="page-link " href="">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="">2</a></li>
                  <li className="page-item">
                    <a className="page-link" href=""><i className="fas fa-chevron-right" aria-hidden="true" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
               BLOG PART END
          ===========================*/}
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
              <p>Subscribe to get update and information.</p>
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
  {/*=============SCROLL BTN==============*/}
</div>
    </>
  )
}

export default Blog