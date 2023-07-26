import React, {useState, useEffect} from "react";
import axios from 'axios';

function ReccsShows(){
    const [show, setShow] = useState(null);

    useEffect(() => {
        getShow();
      }, []);

    const getShow = async() => {
        const res = await axios (`http://localhost:5000/api/generateRandVid`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            })
            .then(res => {
                console.log(res.data)
                setShow(res.data)
            })
            .catch(err => console.log(err));
        };
            

    
    return(
        // <div className="content">
            <div className="carouselContainer">
                
                    {show == []? "Error"
                    : show == null? "...Loading"
                        : <ol className="caraViewport">
                            <li className="slide col text" id="recc1">
                                <h1 className="videoName">{show[0].name}</h1>
                                {/* <div className="reccDetails"> */}
                                        <ol className="text infoList reccDesc desc">
                                            <li className="descriptionLine">{show[0].description}</li>
                                            <li className="indivItem">Category: {show[0].tags}</li>
                                            <li>Cast: {show[0].starring}</li>
                                        </ol>
                                {/* </div> */}
                                <div className="thumbnail reccThumbnail section">
                                <iframe width="100%" height="250" className="video reccVideo"
                                        src={show[0].link} title="YouTube video player" frameborder="0" 
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowfullscreen>
                                </iframe>


                                </div>
                            </li>
                        </ol>
                }
                
                
            </div>
    );
}

export default ReccsShows;