// import React, {useState, useEffect} from 'react';
import Navbar from "../components/MusicNavbar";
import ReccsShows from "../components/ReccsShows";
import ListAlbums from "../components/listAlbums";

const MainVid = () => {
    return(
    <div className="content mainVid">
        <Navbar></Navbar>
        
        <div className="contentMainVid">
            <ListAlbums category="BTS"></ListAlbums>
            <ListAlbums category="Namjoon"></ListAlbums>
            <ListAlbums category="Yoongi"></ListAlbums>
            <ListAlbums category="Jin"></ListAlbums>
            <ListAlbums category="Hoseok"></ListAlbums>
            <ListAlbums category="Jimin"></ListAlbums>
            <ListAlbums category="Taehyung"></ListAlbums>
            <ListAlbums category="Jungkook"></ListAlbums>
            
        </div>
      
    </div>
    );
  }
  
  
  export default MainVid;