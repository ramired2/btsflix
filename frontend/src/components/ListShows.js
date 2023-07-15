import React, {useState} from "react";
import ModalShow from "./ModalShow";

function ListShows({shows, category}){
    const [Hover, setHover] = useState(false);
    
    return(
        <div>
            <h3 className="text category">{category}</h3>

            <div className="showList">
                <div className="scrolling">
                    {shows.map ((show, idx) => 
                        <div className="indivShow" onClick={() => {setHover(show);}}
                                                   onMouseLeave={() => setHover(false)}
                                                   >
                            {console.log("hovered on ", Hover)}
                            {/* {Hover != false? <ModalShow info={Hover}></ModalShow>:""} */}
                        </div>)}
                        {/* {Hover != false? <ModalShow info={Hover}></ModalShow>:""} */}
                </div>
            </div>
            {Hover != false? <ModalShow info={Hover}></ModalShow>:""}
        </div>
    );
}

export default ListShows;