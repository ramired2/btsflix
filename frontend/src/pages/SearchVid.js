import React, {useState, useEffect} from 'react';
import { useParams, useLocation } from "react-router-dom";
import axios from 'axios';
import Navbar from "../components/Navbar";

const SearchVid = (props) => {
  const location = useLocation()
  const [type, setType] = useState(location.state.type);
  // let type = location.state.type
  const [search, setSearch] = useState(location.state.search);
  // let search = location.state.search
  const [shows, setShow] = useState(null);
  const [Hover, setHover] = useState(false);

  // onChange={(e) => whichGet()}

  console.log(type, search)

  useEffect(() => {
    console.log("in useEffect")
    if (type == "category") {
      console.log("category search")
      getShows();
    }
    else { 
      // (type == "search")
      // only goes here on first page here -- need to fix when user have another search
      console.log("general search")
      genSearch();
    }


  }, []);


  const whichGet = () => {
    if (type == "category") {
      console.log("category search")
      getShows();
    }
    else { 
      // (type == "search")
      // only goes here on first page here -- need to fix when user have another search
      console.log("general search")
      genSearch();
    }
  }
  

  const getShows = async() => {
    const res = await axios (`http://localhost:5000/api/showsFromCategory`, {
        headers: { 'Content-Type': 'application/json'},
        method: "GET",
        params: {category: search}
        })
        .then(res => {
            console.log(res.data)
            setShow(res.data)
        })
        .catch(err => console.log(err));
    };

    const genSearch = async() => {
      const res = await axios (`http://localhost:5000/api/genSearch`, {
          headers: { 'Content-Type': 'application/json'},
          method: "GET",
          params: {search: search}
          })
          .then(res => {
              console.log(res.data)
              setShow(res.data)
          })
          .catch(err => console.log(err));
      };

    const modal = () => {
      return <div className="modalContainer searchModal" >
          <div className="closeBtn" onClick={() => setHover(false)}>x</div>
      <div className="infoContainer">
          <h1 className="videoName">{Hover.name}</h1>
          <iframe width="79%" height="315" className="video"
              src={Hover.link}>
          </iframe>
          <div className="contentInfo">
              <ol className="text infoList desc">
                  <li>{Hover.description}</li>
              </ol>
              <ol className="infoList details">
                  <li className="indivItem">Category: {Hover.tags}</li>
                  <li>Cast: {Hover.starring}</li>
              </ol>
          </div>
      </div>
  </div>
  }

    return(
    <div className='content searchContent'>
      <Navbar></Navbar>

      <div className='searchContainer'>
        <h1 className="text title" onChange={(e) => whichGet()}>Results for: {search}</h1>
        <div className='listShows'>
          {shows? shows == ""? "No Results":
                                    shows.map ((show, idx) => 
                                      <div className="indivShow" onClick={() => {setHover(show);}}>
                                          <img className="thumbnail" src={show.thumbnail} alt="show thumbnail" />
                                      </div>)
                  : "Loading..."}
                          
        </div>
        {Hover != false? modal():""}
      </div>
      
    </div>
    );
  }
  
  
  export default SearchVid;