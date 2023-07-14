import React from "react";

function ListShows({shows}){
    
    return(
        <div className="showList">
            <div className="scrolling">
            {shows.map ((show) => <div className="indivShow"></div>)}
            </div>
        </div>
    );
}

export default ListShows;