// import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReccsShows from "../components/ReccsShows";
import ListShows from "../components/ListShows";

const MainVid = () => {
    const recc = [ {   "videoID":'4',
                        "name":'161227 밥 먹는 김석진',
                        "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                        "platformID":'1',
                        "platformName":'Youtube',
                        "link":'https://www.youtube.com/embed/7fszwWLFAng',
                        "tagID": '5',
                        "tags":'EAT Jin',
                        "starring":'Jin',
                    }
            ]


    return(
    <div className="content mainVid">
        <Navbar></Navbar>
        
        <div className="contentMainVid">
            <ReccsShows shows = {recc}></ReccsShows>
            <ListShows category={"Games"}></ListShows>
            <ListShows category={"Spy"}></ListShows>
            <ListShows category={"Scavenger Hunt"}></ListShows>
        </div>
      
    </div>
    );
  }
  
  
  export default MainVid;