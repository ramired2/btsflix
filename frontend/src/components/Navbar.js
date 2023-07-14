import React, {useState, useEffect, Fragment} from 'react';

function Navbar(props) {  
    return (
            <div className="nav">
              <div className="navLogo">
                <a href='/'><img className="logo"  src="/logo.png" alt="BTSflix Logo" /></a>
              </div>
  
              <div className="navLinks">
                <ul className="nav_list">
                  <div className='navList'>
                  {/* <li id="nav_item"><a href="/">Home</a></li> */}
                  <li id="nav_item"><a href="/nations">Categories</a></li>
                  <li id="nav_item"><a href="/ships">search</a></li>
                  </div>
                </ul>
              </div>
           </div>
          );
  
  }
  
  export default Navbar;