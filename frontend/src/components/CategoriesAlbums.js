import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function CategoriesAlbums(){
    // call the list of categories// tags
    const [albums, setalbums] = useState([]);

    useEffect(() => {
        getalbums();
        // setalbums(albums => [...albums, "all"]);
      }, []);

    const getalbums = async() => {
        const res = await axios (`http://localhost:5000/api/getAllAlbums`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            params: {category: "year"}
            })
            .then(res => {
                // console.log(res.data)
                setalbums(res.data);
                setalbums(albums => [...albums, {year: "All"}]);
                
                console.log(albums)
            })
            .catch(err => console.log(err));
        };
    
    return(
    <div className="categoriesModal">
        {albums.map((album) => 
            <ol className="listtags">
                <a href={"/search/"+album.year}><li>{album.year}</li></a>
            </ol>)}
        
    </div>
    );
  }
  
  
  export default CategoriesAlbums;