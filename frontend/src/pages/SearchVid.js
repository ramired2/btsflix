import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const SearchVid = (props) => {
    // console.log(props)
    // useEffect (() => {
        let { searching } = useParams();
        console.log(searching)
    // });

    return(
    <div>
      <h1 className="text">SEARCH</h1>
    </div>
    );
  }
  
  
  export default SearchVid;