import React, {useState, useEffect, Fragment} from 'react';
import CategoriesAlbums from "../components/CategoriesAlbums.js";
import { useParams, useLocation } from "react-router-dom";
import queryString from 'query-string';

function MusicNavbar (props) {  
  const [Hover, setHover] = useState(false);
  const [show, setShow] = useState(true);
  const [token, setToken] = useState(false);
  const location = useLocation();
  // const params = window.location.search;
  // const [token, settoken] = useState(params.get('code'));


  useEffect(() => {
    console.log(queryString.parse(location.search))

    setToken(queryString.parse(location.search))

    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined") {
        localStorage.setItem("token", token['code'])
    }

    // fetch("https://accounts.spotify.com/api/token", )
      
    
  }, [token['code']]);
  
    return (
            <div className="nav">
             <a href='/'> <div className="navLogo">
                <img className="logo"  src="/logo.png" alt="BTSflix Logo" />
              </div></a>
  
              <div className="navLinks">
                <ul className="nav_list">
                  <div className='navList'>
                  <a href='/discography'><li id="nav_item">Music</li></a>
                  {/* <li id="nav_item"><a href="/">Home</a></li> */}
                  <div onMouseEnter={() => setHover(true)}>
                    <li id="nav_item" className="categoriesHover">Categories</li>

                    {Hover == true? <div onMouseLeave={() => setHover(false)}><CategoriesAlbums ></CategoriesAlbums></div> :""}
                    
                  </div>
                  {/* <a href='https://accounts.spotify.com/authorize?client_id=349fe331f58e4547ba01a4ba78274b92&response_type=code&redirect_uri=http://localhost:3000/discography&scope=streaming'>Spotify Login</a> */}
                  
                  </div>
                </ul>
              </div>
           </div>
          );
  
  }
  
  export default MusicNavbar ;