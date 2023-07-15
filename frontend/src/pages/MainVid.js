// import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReccsShows from "../components/ReccsShows";
import ListShows from "../components/ListShows";

const MainVid = () => {
    const shows = [ {   "videoID":'4',
    "name":'161227 밥 먹는 김석진',
    "description":'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    "platformID":'1',
    "platformName":'Youtube',
    "link":'https://www.youtube.com/embed/7fszwWLFAng',
    "tagID": '5',
    "tags":'EAT Jin',
    "starring":'Jin',
},
{"videoID":'1',
    "name":'Run BTS! 2015 EP.1 - Open',
    "description":'First episode of Run BTS! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    "platformID":'1',
    "platformName":'Youtube',
    "link":'https://www.youtube.com/embed/5XisXVcbZEw',
    "tagID":'1,3',
    "tags":'Comedy, Run BTS!, Horror, Betrayal, Heartwarming, Theme park, Cooler',
    "starring":'Jimin, RM, Suga, JK, JHope, Jin, V'
},
{"videoID":'2',
    "name":'Run BTS! 2015 EP.2 - 최고의 남자',
    "description":'',
    "platformID":'1',
    "platformName":'Youtube',
    "link":'https://www.youtube.com/embed/fJa1DMVB0vc',
    "tagID":'3',
    "tags":'Comedy',
    "starring":'Jungkook, RM, Suga, V'
},
{   "videoID":'3',
    "name":'Run BTS! 2015 EP.3 - Theme Park',
    "description":'BTS goes to a themepark',
    "platformID":'1',
    "platformName":'Youtube',
    "link":'https://www.youtube.com/embed/HMG7jim0Bqc',
    "tagID":'4',
    "tags":'Thriller',
    "starring":""
},
                    {   "videoID":'4',
                        "name":'161227 밥 먹는 김석진',
                        "description":'',
                        "platformID":'1',
                        "platformName":'Youtube',
                        "link":'https://www.youtube.com/embed/7fszwWLFAng',
                        "tagID": '5',
                        "tags":'EAT Jin',
                        "starring":'Jin',
                    },
                    {"videoID":'1',
                        "name":'Run BTS! 2015 EP.1 - Open',
                        "description":'First episode of Run BTS!',
                        "platformID":'1',
                        "platformName":'Youtube',
                        "link":'https://www.youtube.com/embed/5XisXVcbZEw',
                        "tagID":'1,3',
                        "tags":'Comedy, Run BTS!',
                        "starring":'Jimin, RM, Suga'
                    },
                    {"videoID":'2',
                        "name":'Run BTS! 2015 EP.2 - 최고의 남자',
                        "description":'',
                        "platformID":'1',
                        "platformName":'Youtube',
                        "link":'https://www.youtube.com/embed/fJa1DMVB0vc',
                        "tagID":'3',
                        "tags":'Comedy',
                        "starring":'Jungkook, RM, Suga, V'
                    },
                    {   "videoID":'3',
                        "name":'Run BTS! 2015 EP.3 - Theme Park',
                        "description":'BTS goes to a themepark',
                        "platformID":'1',
                        "platformName":'Youtube',
                        "link":'https://www.youtube.com/embed/HMG7jim0Bqc',
                        "tagID":'4',
                        "tags":'Thriller',
                        "starring":""
                    }
            ]


    return(
    <div className="content mainVid">
        <Navbar></Navbar>
        
        <div className="contentMainVid">
            {/* <div className="carouselContainer"> */}
                <ReccsShows shows = {shows}></ReccsShows>
            {/* </div>  */}
            <ListShows shows={shows} category={"Comedy"}></ListShows>
            <ListShows shows={shows} category={"Horror"}></ListShows>
        </div>
      
    </div>
    );
  }
  
  
  export default MainVid;