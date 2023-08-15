import React, {useState, useEffect, Fragment} from 'react';
import CategoriesAlbums from "../components/CategoriesAlbums.js";
import { useParams, useLocation } from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';
import { Buffer } from 'buffer';


function MusicNavbar (props) {  
  const [Hover, setHover] = useState(false);
  const [show, setShow] = useState(true);
  const [token, setToken] = useState(false);
  const location = useLocation();
  // const params = window.location.search;
  // const [token, settoken] = useState(params.get('code'));


  useEffect(() => {
    // console.log(queryString.parse(location.search))

    // setToken(queryString.parse(location.search))
    
    if (!localStorage.getItem('token') || localStorage.getItem('token') == "undefined") {
        // console.log(process.env.REACT_APP_spotifyClient, process.env.REACT_APP_spotifySecret)
        getToken();
        localStorage.setItem("token", token['access_token'])
    }

    
      
    
  }, [token['access_token']]);

  const getToken = async() => {
    const res = await axios (`http://localhost:5000/api`, {
        headers: { 'Content-Type': 'application/json'},
        method: "GET",
        })
        .then(res => {
            // console.log(res.data)

            setToken(res.data)
        })
        .catch(err => console.log(err));
    };

  // const getToken = async() => {
  //   var token = Buffer.from(`${process.env.REACT_APP_spotifyClient}:${process.env.REACT_APP_spotifySecret}`, 'utf-8').toString('base64')
  //   const res = await axios.post (`https://accounts.spotify.com/api/token`, {grant_type: 'client_credentials'}, {
  //       method: 'POST',
  //       grant_type :'client_credentials',
  //       headers: { 
  //         'Authorization': `Basic ${token}`,
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         'Accept': 'application/json'},
  //       })
  //       .then(res => {
  //           console.log(res.data)
  //           setToken(res.data)
  //       })
  //       .catch(err => console.log(err));
  //   };
  
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