import React, {useEffect, useState} from "react";
import axios from 'axios';
// import ModalShow from "./ModalShow";

function ListShows({category}){
    const [Hover, setHover] = useState(false);
    const [shows, setShow] = useState([]);
    const [remainder, setRemainder] = useState([]);

    useEffect(() => {
        getShows();
        // settingRemainEps();
      }, []);

    //   const settingRemainEps = () => {
    //     let min = 1
    //     shows.map((indiv, index) => {min < index? setRemainder([...remainder, indiv]) :""}
    //     )
        
    // }

      const getShows = async() => {
        const res = await axios (`http://localhost:5000/api/showsFromCategory`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            params: {category: category}
            })
            .then(res => {
                console.log(res.data)
                setShow(res.data)
            })
            .catch(err => console.log(err));
        };

    const modal = () => {
        return <div className="modalContainer" >
            {/* <div className="closeBtn mainCloseBtn" onClick={() => setHover(false)}>x</div> */}
        <div className="infoContainer">
        <div className="closeBtn mainCloseBtn" onClick={() => setHover(false)}>x</div>
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
        <div className="listShowBG">
            <h3 className="text category">{category}</h3>

            <div className="showList">
                <div className="scrolling">
                    {shows != null? shows.map ((show, idx) => 
                        <div className="indivShow" onClick={() => {setHover(show);}}>
                            <p className='text showName'>{show.name}</p>
                            <img className="thumbnail" src={show.thumbnail} alt="show thumbnail" />
                        </div>): "Loading..."}
                </div>
            </div>
            {Hover != false? modal():""}
        </div>
    );
}

export default ListShows;