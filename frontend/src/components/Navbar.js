import React, {useState, useEffect, Fragment} from 'react';
import CategoriesVid from "../components/CategoriesVid.js";

function Navbar(props) {  
  const [Hover, setHover] = useState(false);
  
    return (
            <div className="nav">
              <div className="navLogo">
                <a href='/'><img className="logo"  src="/logo.png" alt="BTSflix Logo" /></a>
              </div>
  
              <div className="navLinks">
                <ul className="nav_list">
                  <div className='navList'>
                  {/* <li id="nav_item"><a href="/">Home</a></li> */}
                  <div onMouseEnter={() => setHover(true)}>
                    <li id="nav_item" className="categoriesHover">Categories</li>

                    {Hover == true? <div onMouseLeave={() => setHover(false)}><CategoriesVid ></CategoriesVid></div> :""}
                    
                  </div>
                  <li id="nav_item"><a href="/ships">search</a></li>
                  </div>
                </ul>
              </div>
           </div>
          );
  
  }
  
  export default Navbar;