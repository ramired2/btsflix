import React, {useState} from "react";
// import ModalShow from "./ModalShow";

function ListShows({shows, category}){
    const [Hover, setHover] = useState(false);

    const modal = () => {
        return <div className="modalContainer" >
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
        <div>
            <h3 className="text category">{category}</h3>

            <div className="showList">
                <div className="scrolling">
                    {shows.map ((show, idx) => 
                        <div className="indivShow" onClick={() => {setHover(show);}}
                                                //    onMouseLeave={() => setHover(false)}
                                                   >
                            {console.log("hovered on ", Hover)}
                            {/* {Hover != false? <ModalShow info={Hover}></ModalShow>:""} */}
                        </div>)}
                        {/* {Hover != false? <ModalShow info={Hover}></ModalShow>:""} */}
                </div>
            </div>
            {Hover != false? modal():""}
        </div>
    );
}

export default ListShows;