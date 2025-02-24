import { FaLock, FaUnlock } from "react-icons/fa";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar() {
  const [authState,setAuthstate] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("token"))
    setAuthstate(true)
    else
    setAuthstate(false)
  },[])
function Logout(){
  localStorage.removeItem("token");
  const location = useLocation();

      // Redirect to login and preserve intended location
      return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg main_menu main_menu_2 menu_fix">
        <div className="container-fluid">
      
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
                <Link
                  to="/listings"
                  className="nav-link"
                  aria-current="page"
                  href=" "
                >
                  Listings
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/pricing"
                  className="nav-link"
                  aria-current="page"
                  href=" "
                >
                  Pricing Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  aria-current="page"
                  href=" "
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/custom" className="nav-link" href=" ">
                  Pages <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"/>
</svg>
                </Link>
                
                <ul className="menu_droapdown">
                  <li className="nav-item">
                    <Link
                      to="/categories"
                      className=""
                      aria-current="page"
                      href=" "
                    >
                      Listings Categories
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-link"
                  aria-current="page"
                  href=" "
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                  aria-current="page"
                  href=" "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="right_menu">
              <li className="nav-item signin">
                {authState? ( <>  <Link
                  to="/add"
                  className="common_btn_2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                >
                  <svg
                  style={{margin:"10px"}}
                    width="15px"
                    height="15px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-362.000000, -1037.000000)"
                        fill="#FFFFFF"
                      >
                        <path
                          d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049"
                          id="plus"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  Add Listing
                </Link>
                <a
                  to="/login"
                  className="common_btn_2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                  style={{margin:"10px"}}
                  onClick={Logout}
                >
                 <FaUnlock style={{margin:"10px"}}/>
                  Log out
                </a>
                </>):( <Link
                  to="/login"
                  className="common_btn_2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href=" "
                  
                >
                 <FaLock style={{margin:"10px"}}/>
                  Login
                </Link>)}
             
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
