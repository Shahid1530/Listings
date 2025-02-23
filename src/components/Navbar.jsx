import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
      
      <nav className="navbar navbar-expand-lg main_menu main_menu_2 menu_fix">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">
            <img
              src= " "
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="far fa-bars" aria-hidden="true" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" href=" ">
                  Home 
                </Link>
                
              </li>
              <li className="nav-item">
                <Link to="/listings" className="nav-link" aria-current="page" href=" ">
                  Listings
                </Link>
              </li>
              <li className="nav-item">
                <Link to = "/pricing" className="nav-link" aria-current="page" href=" ">
                  Pricing Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link to = "/about" className="nav-link" aria-current="page" href=" ">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/custom" className="nav-link" href=" ">
                  Pages <i className="far fa-chevron-down" aria-hidden="true" />
                </Link>
                <ul className="menu_droapdown">
                  <li className="nav-item">
                    <Link to="/categories" className="" aria-current="page" href=" ">
                      Listings Categories
                    </Link>
                  </li>
                  
                </ul>
              </li>
              <li className="nav-item">
                <Link to = "/blog" className="nav-link" aria-current="page" href=" ">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" aria-current="page" href=" ">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="right_menu">
              <li className="nav-item signin">
                <a
                  className="common_btn_2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                >
                  <i className="far fa-plus" aria-hidden="true" />
                  Add Listing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav></>
    )
}

export default Navbar
