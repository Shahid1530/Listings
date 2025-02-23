
import Navbar from "./Navbar";
function Blog_specific_page() {
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-49-24-9055.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Simple Ways To Reduce Your Unwanted Wrinkles!</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item"><a href="">
                    Blog </a></li>
                <li className="breadcrumb-item active" aria-current="page"> Blog Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="blog_details">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="blog_sidebar">
            <div className="blog_search">
              <h4>Search</h4>
              <form method="get" action="https://demo.websolutionus.com/dirlist/blog-search">
                <input required type="text" placeholder="What are you looking for" name="search" />
                <button type="submit"><i className="fas fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            <div className="blog_category">
              <h4>Categories</h4>
              <ul>
                <li>
                  <a href="">Fitness
                    <span>4</span>
                  </a>
                </li>
                <li>
                  <a href="">Lifestyle
                    <span>6</span>
                  </a>
                </li>
                <li>
                  <a href="">Event
                    <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="">Bar Cafe
                    <span>1</span>
                  </a>
                </li>
                <li>
                  <a href="">Food Drink
                    <span>0</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebar_blog">
              <h4>Popular Posts</h4>
              <a href="" className="sidebar_blog_single">
                <div className="sidebar_blog_img">
                  <img src="" alt="blog" className="imgofluid w-100" />
                </div>
                <div className="sidebar_blog_text">
                  <h5>10 Reasons To Start Your Own, Profitable Website!</h5>
                  <p> <span>Oct 18 2021 </span>
                    0
                    Comment </p>
                </div>
              </a>
            </div>
            <div className="sidebar_contact_share">
              <h4>Connect and Follow</h4>
              <ul>
                <li>
                  <a href="" className="fab fa-facebook" aria-hidden="true" />
                </li>
                <li>
                  <a href="" className="fab fa-twitter" aria-hidden="true" />
                </li>
                <li>
                  <a href="" className="fab fa-linkedin" aria-hidden="true" />
                </li>
                <li>
                  <a href="" className="fab fa-youtube" aria-hidden="true" />
                </li>
                <li>
                  <a href="" className="fab fa-instagram" aria-hidden="true" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7">
          <div className="main_blog">
            <div className="main_blog_img">
              <img src="" alt="blog" className="img-fluid w-100" />
            </div>
            <ul className="main_blog_header">
              <li><a href=""><i className="fal fa-calendar-alt" aria-hidden="true" />
                  Oct 18 2021</a></li>
              <li><a href=""><i className="fal fa-comment-dots" aria-hidden="true" />0
                  Comment</a></li>
              <li><a href=""><i className="fal fa-eye" aria-hidden="true" /> 11
                  Views</a></li>
              <li><a href=""><i className="fal fa-tags" aria-hidden="true" />
                  Lifestyle </a></li>
            </ul>
            <h4>Simple Ways To Reduce Your Unwanted Wrinkles!</h4>
            <p>Reducing unwanted wrinkles is a common goal for many individuals seeking to maintain youthful and healthy-looking skin. Fortunately, achieving smoother, more radiant skin always require elaborate treatments or expensive products. By incorporating simple yet effective strategies into your daily routine, you can significantly diminish the appearance of wrinkles and promote overall skin health.</p>
            <p>&nbsp;</p>
            <p>First and foremost, hydration plays a crucial role in skin elasticity and wrinkle reduction. Drinking an ample amount of water throughout the day helps to keep the skin hydrated from within, preventing it from appearing dry and prone to fine lines. Additionally, using moisturizers that contain ingredients like hyaluronic acid, glycerin, or ceramides helps to lock in moisture and maintain a supple complexion.</p>
            <p>&nbsp;</p>
            <p>A consistent skincare regimen is essential for combating wrinkles. Cleansing the skin daily removes impurities and allows skincare products to penetrate more effectively. Incorporating products with retinoids, such as retinol or prescription-strength retinoids, can stimulate collagen production and accelerate cell turnover, thereby reducing the appearance of wrinkles over time. Vitamin C serums are also beneficial as they help to brighten the skin tone and improve overall skin texture.</p>
            <p>&nbsp;</p>
            <p>Sun protection is paramount in wrinkle prevention. Prolonged sun exposure contributes to premature aging by breaking down collagen and elastin fibers in the skin. To safeguard against UV damage, apply a broad-spectrum sunscreen with SPF 30 or higher daily, even on cloudy days or during winter months. Wearing protective clothing, such as hats and sunglasses, further shields the skin from harmful UV rays.</p>
            <p>&nbsp;</p>
            <p>Maintaining a healthy lifestyle supports skin health and wrinkle reduction. Eating a balanced diet rich in antioxidants, vitamins, and essential fatty acids helps to nourish the skin from the inside out. Foods like fruits, vegetables, nuts, and fish contain nutrients that support collagen production and combat oxidative stress, which contributes to aging. Additionally, avoiding smoking and excessive alcohol consumption can help preserve skin elasticity and prevent premature wrinkles.</p>
            <p>&nbsp;</p>
            <p>Lastly, managing stress levels is crucial for maintaining youthful skin. Chronic stress can lead to the release of hormones that accelerate skin aging processes. Incorporating relaxation techniques such as meditation, yoga, or deep breathing exercises into your routine can help reduce stress and promote overall well-being, benefiting both your skin and overall health.</p>
            <p>&nbsp;</p>
            <p>In conclusion, reducing unwanted wrinkles is achievable through a combination of consistent skincare practices, sun protection, healthy lifestyle choices, and stress management. By implementing these simple yet effective strategies into your daily life, you can enhance your  appearance, maintain its youthful glow, and feel confident in your skin at any age.</p>
            <div className="blog_comment_area">
              <h5>Add a Comment</h5>
              <form id="blogCommentForm">
                <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <div className="row">
                  <div className="col-xl-4">
                    <div className="blog_single_input">
                      <input type="text" defaultValue name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="blog_single_input">
                      <input type="email" defaultValue name="email" placeholder="Email" id="email" />
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="blog_single_input">
                      <input type="text" defaultValue name="phone" placeholder="Phone" id="phone" />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="blog_single_input">
                      <textarea cols={3} rows={5} name="comment" placeholder="Comment" id="comment" defaultValue={""} />
                      <button id="blogCommentBtn" type="submit" className="read_btn"><i id="blog-comment-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                        Submit Comment</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div id="fb-root" className=" fb_reset"><div style={{"position":"absolute","top":"-10000px","width":"0px","height":"0px"}}><div /></div></div>
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
  <div className="scroll_btn " style={{"display":"none"}}>
    <i className="fas fa-chevron-up" aria-hidden="true" />
  </div>
</div>
   </>
  )
}

export default Blog_specific_page