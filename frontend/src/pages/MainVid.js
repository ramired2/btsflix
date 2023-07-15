// import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReccsShows from "../components/ReccsShows";
import ListShows from "../components/ListShows";

const MainVid = () => {
    const shows = [ {   "videoID":'4',
                        "name":'161227 밥 먹는 김석진',
                        "description":'',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=7fszwWLFAng',
                        "tagID": '5',
                        "tags":'EAT Jin',
                        "starring":'Jin',
                    },
                    {   "videoID":'1',
                        "name":'Run BTS! 2015 EP.1 - Open',
                        "description":'First episode of Run BTS!',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=5XisXVcbZEw&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz',
                        "tagID":'1,3',
                        "tags":'Comedy, Run BTS!',
                        "starring":'Jimin, RM, Suga'
                    },
                    {"videoID":'2',
                        "name":'Run BTS! 2015 EP.2 - 최고의 남자',
                        "description":'',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=fJa1DMVB0vc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=2',
                        "tagID":'3',
                        "tags":'Comedy',
                        "starring":'Jungkook, RM, Suga, V'
                    },
                    {   "videoID":'3',
                        "name":'Run BTS! 2015 EP.3 - Theme Park',
                        "description":'BTS goes to a themepark',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=HMG7jim0Bqc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=3',
                        "tagID":'4',
                        "tags":'Thriller',
                        "starring":""
                    },
                    {   "videoID":'4',
                        "name":'161227 밥 먹는 김석진',
                        "description":'',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=7fszwWLFAng',
                        "tagID": '5',
                        "tags":'EAT Jin',
                        "starring":'Jin',
                    },
                    {"videoID":'1',
                        "name":'Run BTS! 2015 EP.1 - Open',
                        "description":'First episode of Run BTS!',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=5XisXVcbZEw&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz',
                        "tagID":'1,3',
                        "tags":'Comedy, Run BTS!',
                        "starring":'Jimin, RM, Suga'
                    },
                    {"videoID":'2',
                        "name":'Run BTS! 2015 EP.2 - 최고의 남자',
                        "description":'',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=fJa1DMVB0vc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=2',
                        "tagID":'3',
                        "tags":'Comedy',
                        "starring":'Jungkook, RM, Suga, V'
                    },
                    {   "videoID":'3',
                        "name":'Run BTS! 2015 EP.3 - Theme Park',
                        "description":'BTS goes to a themepark',
                        "platformID":'1',
                        "name":'Youtube',
                        "link":'https://www.youtube.com/watch?v=HMG7jim0Bqc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=3',
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