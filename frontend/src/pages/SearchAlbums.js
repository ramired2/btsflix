import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/MusicNavbar.js";

const SearchAlbum = (props) => {
  const location = useLocation()
  const [params, setParams] = useState(useParams());

  const [type, setType] = useState(params.type);
  const [search, setSearch] = useState(params.search);

  const [albums, setAlbums] = useState(null);
  const [Hover, setHover] = useState(false);

  // onChange={(e) => whichGet()}

//   console.log(type, search)

  useEffect(() => {
    // console.log("in useEffect")
    if (search == "All") {
      console.log(search)
      getalbums();
    }
    else { 
    //   (type == "search")
    //   only goes here on first page here -- need to fix when user have another search
      console.log("search")
      genSearch();
    }


  }, []);

  const getalbums = async() => {
    const res = await axios (`http://localhost:5000/api/getAllAlbums`, {
        headers: { 'Content-Type': 'application/json'},
        method: "GET",
        params: {category: "All"}
        })
        .then(res => {
            console.log(res.data)
            setAlbums(res.data)
        })
        .catch(err => console.log(err));
    };

    const genSearch = async() => {
      const res = await axios (`http://localhost:5000/api/albumsFromMembersORYear`, {
          headers: { 'Content-Type': 'application/json'},
          method: "GET",
          params: {category: search}
          })
          .then(res => {
              console.log(res.data)
              setAlbums(res.data)
          })
          .catch(err => console.log(err));
      };

      const modal = () => {
        return <div className="modalContainer albumsModal" >
        <div className="infoContainer">
        <div className="closeBtn mainCloseBtn" onClick={() => setHover(false)}>x</div>
            <h1 className="videoName">{Hover.albumName}</h1>
            <a href= {"https://open.spotify.com/album/" + Hover.link} ><img width="300" height="300" className="video" src={`/${Hover.cover}`}></img></a>
            <div className="contentInfo modalContentInfo">
                <ol className="infoList details albumDetails">
                    <li className="indivItem">Artist: {Hover.alias + " (" + Hover.fullName + ")"}</li>
                    <li>Year: {Hover.year}</li>
                </ol>
            </div>
            </div>
        </div>
        }

    return(
    <div className='content searchContent'>
      <Navbar></Navbar>

      <div className='searchContainer'>
        {/* onChange={(e) => whichGet()} */}
        <h1 className="text title" >Results for: {search}</h1> 
        <div className='listShows'>
          {albums? albums == ""? "No Results":
                                    albums.map ((album, idx) => 
                                      <div className="indivShow indivAlbums" onClick={() => {setHover(album); window.scrollTo(0, 0);}}>
                                        <div className='grouping'>
                                            {/* <p className='text showName'>{show.name}</p> */}
                                            <img className="thumbnail" src={`/${album.cover}`} alt="episodes thumbnail" />
                                          </div>
                                      </div>)
                  : "Loading..."}
                          
        </div>
        {Hover != false? modal():""}
      </div>
      
    </div>
    );
  }
  
  
  export default SearchAlbum;