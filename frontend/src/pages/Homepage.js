// import React, {useState, useEffect} from 'react';

const Homepage = () => {

  return(
  <div className="content">

    <div className="container">
      <div className="optionContainer">
        <a href="/shows">
        <div className="TV option">
          <div className="tvBase">
            <div className="tvStatic"></div>
            </div>
            <div className="tvDetails"></div>
        </div>
        </a>

        <a href="/discography">
            <div className="music option">
            <div className="cdPlayer">
              <div className="cdContainer">
                <div className="cd"></div>
              </div>
            </div>
          </div>
          </a>

        {/* <div className="mag option">
          <div className="mags"></div>
        </div> */}
      </div>
      
      <div className="house">
        <div className="houseDetails"></div>
        <div className="houseWalls"></div>
      </div>
    </div>
    
  </div>
  );
}


export default Homepage;