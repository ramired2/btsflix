import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function CategoriesVid(){
    // call the list of categories// tags
    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags();
      }, []);

    const getTags = async() => {
        const res = await axios (`http://localhost:5000/api/getTags`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            })
            .then(res => {
                console.log(res.data)
                setTags(res.data)
            })
            .catch(err => console.log(err));
        };
    
    return(
    <div className="categoriesModal">
        {tags.map((tag) => 
            <ol className="listtags">
                <a href={"/search/category/"+tag.tag}><li value={tag.tagID}>{tag.tag}</li></a>
            </ol>)}
        
    </div>
    );
  }
  
  
  export default CategoriesVid;