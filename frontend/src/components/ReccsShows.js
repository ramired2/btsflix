import React from "react";

function ReccsShows({shows}){
    
    return(
        // <div className="content">
            <div className="pos">
                <ol className="caraViewport">
                    <li className="slide col text" id="recc1">
                        <div className="details section">
                            show details
                        </div>
                        <div className="thumbnail section">
                            thumbnail
                        </div>
                    </li>
                    <li className="slide col2 text" id="recc2">
                        <div className="details section">
                            show details
                        </div>
                        <div className="thumbnail section">
                            thumbnail
                        </div>
                    </li>
                    <li className="slide col3 text" id="recc3">
                        <div className="details section">
                            show details
                        </div>
                        <div className="thumbnail section">
                            thumbnail
                        </div>
                    </li>
                </ol>
                <ol className="btns">
                    <li className="btnRecc">
                        <a href="#recc1">1</a>
                    </li>
                    <li className="btnRecc">
                        <a href="#recc2">2</a>
                    </li>
                    <li className="btnRecc">
                        <a href="#recc3">3</a>
                    </li>
                </ol>
            </div>

        // </div>
    );
}

export default ReccsShows;