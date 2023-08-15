import React, {useEffect, useState} from "react";
import axios from 'axios';

function ListAlbums({category}){
    const [Hover, setHover] = useState(false);
    const [Albums, setAlbum] = useState([]);
    const [albumInfo, setAlbumInfo] = useState([]);
    const [temp, settemp] = useState([]);
    const [final, setfinal] = useState([]);


    const [show, setShow] = useState(true);


    useEffect(() => {
        getAlbums();
        // mappingIt();

        // if(Albums) {
        //     console.log(final)
        //     console.log(albumInfo)
        //     setfinal(
        //         Albums.map((album, i) => (
        //             {album, "tracks":[albumInfo[i]]}
        //             ))
        //         )
        //     console.log("final")
        //     console.log(final)
        // }

      }, []);

      const getAlbums = async() => {
        const res = await axios (`http://localhost:5000/api/albumsFromMembersORYear`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            params: {category: category, token: localStorage.getItem('token')}
            })
            .then(res => {
                // console.log(res.data)

                setAlbum(res.data)
            })
            .catch(err => console.log(err));
        };

    // const getAlbumInfo = async(link, index) => {
    //     const res = await axios.get (`https://api.spotify.com/v1/albums/${link}/tracks`, {
    //         headers: {
    //                     Authorization: `Bearer ${localStorage.getItem('token')}`,
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',},
    //         })
    //         .then(res => {
    //             setAlbumInfo(albumInfo => [...albumInfo, [res.data["items"]]])
    //             console.log(albumInfo)
    //             // console.log("api call")

    //         })
    //         .catch(err => console.log(err));
    //     };

    //     const mappingIt = () => {
    //         Albums.map ((album, idx) =>
    //             getAlbumInfo(album.link, idx))

    //         console.log("got album info")
    //     }

    const modal = () => {
        console.log(Hover)
        console.log(Hover["tracks"])
        return <div className="modalContainer" >
        <div className="infoContainer">
        <div className="closeBtn mainCloseBtn" onClick={() => setHover(false)}>x</div>
            <h1 className="videoName album">{Hover.albumName}</h1>
            <a target="_blank" href= {"https://open.spotify.com/album/" + Hover.link} ><img width="300" height="300" className="video album" src={`/${Hover.cover}`}></img></a>
            <div className="contentInfo modalContentInfo">
                <ol className="infoList details albumDetails">
                    <li className="indivItem">Artist: {Hover.alias + " (" + Hover.fullName + ")"}</li>
                    <li>Year: {Hover.year}</li>
                </ol>

                {/* {final["tracks"] != undefined? 
                <div><h4 className="infoList details albumDetails">Tracks</h4>
                
                <ol>
                    {Hover["tracks"]["tracks"].map((track, index) => <li>{albumInfo}</li>)}
                </ol>
                </div>
                : ""} */}
            </div>
        </div>
    </div>
    }


    return(
        <div className="listAlbumsBG" id="top">
            <h3 className="text category">{category}</h3>

            <div className="showList">
                <div className="scrolling">
                    {Albums == []? "Loading..."
                        : Albums.map ((album, idx) =>
                        <div className="indivAlbums" onClick={() => {setHover(album); window.scrollTo(0, 0);}}>
                            {/* <p className='text showName'>{album.name}</p> */}
                            <img className="thumbnail" src={`/${album.cover}`} alt="episodes thumbnail" />
                        </div>)}
                </div>
            </div>
            {Hover != false? modal():""}
        </div>
    );
}

export default ListAlbums;