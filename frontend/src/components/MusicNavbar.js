import React, {useState, useEffect, Fragment} from 'react';
// import CategoriesVid from "../components/CategoriesMusic.js";
import { Link } from "react-router-dom";

function MusicNavbar (props) {  
  const [Hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

//   const modal = () => {
//     let link = "/search/search/" + search
//     return <div>
//               {show == false? <li id="nav_item" onMouseEnter={() => setShow(true)}> search</li>
//               :<div onMouseLeave={() => setShow(false)} >
//                 <input type="text" class="textbox" placeholder="type here..." value={search} onChange={(e) => setSearch(e.target.value)}/>
//                 {console.log(search)}
//                 <a href={link}><button className="btnSearch">Go</button></a>
//               </div>}

//           </div>
//   }
  
    return (
            <div className="nav">
              <div className="navLogo">
                <a href='/'><img className="logo"  src="/logo.png" alt="BTSflix Logo" /></a>
              </div>
  
              <div className="navLinks">
                <ul className="nav_list">
                  <div className='navList'>
                  <a href='/discography'><li id="nav_item">Music</li></a>
                  {/* <li id="nav_item"><a href="/">Home</a></li> */}
                  {/* <div onMouseEnter={() => setHover(true)}>
                    <li id="nav_item" className="categoriesHover">Categories</li>

                    {Hover == true? <div onMouseLeave={() => setHover(false)}><CategoriesVid ></CategoriesVid></div> :""}
                    
                  </div> */}
                  {/* {modal()} */}
                  
                  </div>
                </ul>
              </div>
           </div>
          );
  
  }
  
  export default MusicNavbar ;