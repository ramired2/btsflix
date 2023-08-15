import React, {useEffect, useState} from "react";
import axios from 'axios';

function ListAlbums({category}){
    const [Hover, setHover] = useState(false);
    const [Albums, setAlbum] = useState([]);
    const [albumInfo, setAlbumInfo] = useState([]);

    const [show, setShow] = useState(true);


    useEffect(() => {
        getAlbums();
        
        // if token then person logged in -- get album info
        if (Hover != false) {
            // console.log(`Bearer ${localStorage.getItem('token')}`)
            getAlbumInfo()
        }

      }, []);

      const getAlbums = async() => {
        const res = await axios (`http://localhost:5000/api/albumsFromMembersORYear`, {
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
            params: {category: category}
            })
            .then(res => {
                // console.log(res.data)
                setAlbum(res.data)
            })
            .catch(err => console.log(err));
        };

    const getAlbumInfo = async() => {
        const res = await axios.get (`https://api.spotify.com/v1/search?q=${Hover.albumName + " " + Hover.alias}&type=album`, {
            headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',},
            })
            .then(res => {
                console.log(`Bearer ${localStorage.getItem('token')}`)
                console.log(res.data)
                setAlbumInfo(res.data)

                //traverse thru album and albumInfo so its just in one array
            })
            .catch(err => console.log(err));
        };

    const modal = () => {
        return <div className="modalContainer" >
        <div className="infoContainer">
        <div className="closeBtn mainCloseBtn" onClick={() => setHover(false)}>x</div>
            <h1 className="videoName album">{Hover.albumName}</h1>
            <a href= {Hover.link} ><img width="300" height="300" className="video album" src={`/${Hover.cover}`}></img></a>
            <div className="contentInfo modalContentInfo">
                <ol className="infoList details albumDetails">
                    <li className="indivItem">Artist: {Hover.alias + " (" + Hover.fullName + ")"}</li>
                    <li>Year: {Hover.year}</li>
                </ol>
            </div>
        </div>
    </div>
    }


    return(
        <div className="listAlbumsBG" id="top">
            <h3 className="text category">{category}</h3>

            <div className="showList">
                <div className="scrolling">
                    {Albums == null? "Loading..."
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