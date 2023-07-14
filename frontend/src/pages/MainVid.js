// import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReccsShows from "../components/ReccsShows";

const MainVid = () => {
    const shows = [   {"name":"btsrun",
                "starring":"btsrun",
                "released":"btsrun",
                "desc":"btsrun"},

                {  "name":"btsrun",
                "starring":"btsrun",
                "released":"btsrun",
                "desc":"btsrun"},

                {  "name":"btsrun",
                "starring":"btsrun",
                "released":"btsrun",
                "desc":"btsrun"}]

    return(
    <div className="content mainVid">
        <Navbar></Navbar>

        <div className="carouselContainer">
        <ReccsShows shows = {shows}></ReccsShows>     </div>   
      
    </div>
    );
  }
  
  
  export default MainVid;