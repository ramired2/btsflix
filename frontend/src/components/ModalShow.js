import React, {useEffect, useState} from "react";

const ModalShow = ({info, show}) => {
    // const [showing, setShowing] = useState(show);
    const [hover, setHover] = useState(show);
    // useEffect(() => {
    //     if (show != false) {
    //         setHover(true)
    //     }
    //   });

  return <div>
    {/* {hover != true? */}
    <div className="modalContainer">
        <div className="infoContainer" 
        // onMouseLeave={() => setHover(false)}
        >
            {console.log("showing status on ", hover)}
            {/* {hover != false? */}
                <ol className="text">
                    <li>{info.name}</li>
                    <li>{info.description}</li>
                    <li>{info.tags}</li>
                    <li>{info.starring}</li>
                </ol>
                {/* :"" */}
            {/* }  */}
        </div>
    </div>
    {/* : ""} */}
  </div>;
};

export default ModalShow;