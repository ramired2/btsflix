// import React, {useState, useEffect} from 'react';
import Navbar from "../components/Navbar";
import ReccsShows from "../components/ReccsShows";
import ListShows from "../components/ListShows";

const MainVid = () => {
    return(
    <div className="content mainVid">
        <Navbar></Navbar>
        
        <div className="contentMainVid">
            <ReccsShows></ReccsShows>
            <ListShows category={"Run BTS!"}></ListShows>
            <ListShows category={"Games"}></ListShows>
            <ListShows category={"Spy"}></ListShows>
            <ListShows category={"Scavenger Hunt"}></ListShows>
            <ListShows category={"Teams"}></ListShows>
            <ListShows category={"Water"}></ListShows>
        </div>
      
    </div>
    );
  }
  
  
  export default MainVid;