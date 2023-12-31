const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const mysql = require("mysql2")
const axios = require("axios")

require('dotenv').config()
// console.log(process.env)

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.db_password,
    database: "btsflix"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("db connected")
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("hi")
});

// FOR SHOWS

app.get("/api/getMembers", (req, res) => {
    const query = `SELECT * FROM Members;`

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    });
});

app.get("/api/getTags", (req, res) => {
    const query = `SELECT * FROM Tags ORDER BY tag;`

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    });
});

app.get("/api/showsFromCategory", (req, res) => {
    const category = req.query.category;
    // console.log(category)
    // console.log(req)

    const query = `SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
                GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
                    FROM Videos
                    INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
                    INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
                    LEFT JOIN Starring ON Videos.videoID = Starring.videoID
                    LEFT JOIN Members ON Starring.artistID = Members.memberID
                    INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
                    WHERE Tags.tag = ?
                    GROUP BY Videos.videoID
                    ORDER BY Videos.videoID;`

    db.query(query, [category], (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    })
});

app.get("/api/genSearch", (req, res) => {
    const search = req.query.search;
    // console.log(category)
    // console.log(req)

    const query = `SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
                    GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
                        FROM Videos
                        INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
                        INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
                        LEFT JOIN Starring ON Videos.videoID = Starring.videoID
                        LEFT JOIN Members ON Starring.artistID = Members.memberID
                        INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
                        WHERE Videos.name LIKE "%` + search + `%" OR Tags.tag LIKE "%` + search + `%" OR Members.alias LIKE "%` + search + `%" OR Members.firstName LIKE "%` + search + `%" OR Members.lastName LIKE "%` + search + `%"
                        GROUP BY Videos.videoID
                        ORDER BY Videos.name;`

                        console.log(query)

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    })
});

// INSERTING all members to videos
app.get("/api/insertStarring/:min/:max", (req, res) => {
    // let min = req.params.min
    // let max = req.params.max

    let min = 5
    let max = 160

    console.log("before loop")
    console.log(min)
    console.log(max)
    
    for(let i = min; i <= max; i++) {
        console.log("in for loop");
        console.log(i);
        
        // (function() {
            const query = `INSERT INTO Starring (videoID, artistID)
                    VALUES	(?, 1),
                            (?, 2),
                            (?, 3),
                            (?, 4),
                            (?, 5),
                            (?, 6),
                            (?, 7);`
             db.query(query, [i, i, i, i, i, i, i], (err, result) => {
                if (err) throw err;
                console.log("successful insertion");
                // res.send();
            });
        // })(i)
    }

    res.send("finished loop");
});

app.get("/api/assignCategory/:min/:max/:tagID", (req, res) => {
    // let min = req.params.min
    // let max = req.params.max
    // let tagID = req.params.tagID <-- not working so have to set --V

    let min = 11
    let max = 160
    let tagID = 1
    

    console.log("before loop")
    console.log(min)
    console.log(max)
    console.log(tagID)

    db.connect(function(err) {
        if (err) throw err;
        console.log("db connected")
    });

    for(let i = min; i <= max; i++) {
        console.log("in for loop");
        console.log(i);
        
        (function() {
            const query = `INSERT INTO VideoTags (videoID, tagID)
                            VALUES  (?, ?)`

             db.query(query, [i, tagID], (err, result) => {
                if (err) throw err;
                console.log("successful insertion");
            });
            console.log("right after call")
        })(i)
    }
    res.send("finished");
});

app.get("/api/generateRandVid", (req, res) => {
    console.log("/api/generateRandVid")
    // set the rand number
    const query = `SET @randNum = (SELECT FLOOR((SELECT RAND() * ((((SELECT COUNT(videoID) FROM Videos)-1))-1)+1)))`

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log("first query done -- set rand num")
    });

    // make the query for videoID = randNumber
    const query2 = `SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name as platformName, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
                GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
                FROM Videos
                INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
                INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
                INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
                LEFT JOIN Starring ON Videos.videoID = Starring.videoID
                LEFT JOIN Members ON Starring.artistID = Members.memberID
                INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
                WHERE Videos.videoID = @randNum;`
    
    db.query(query2, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
        console.log(result)
    });

    // console.log("second quey done -- got show")
    // res.send("finished")
    
});

// FOR ALBUMS
app.get("/api/albumsFromMembersORYear", (req, res) => {
    const category = req.query.category;
    console.log(category)
    // console.log(req)

    const query = `SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year, Albums.cover, Albums.link
                    FROM Albums
                    INNER JOIN Members ON Albums.artistID = Members.memberID
                    WHERE (Members.lastName = "` + category + `" OR Members.firstName = "` + category + `" OR Members.alias = "` + category + `" OR Albums.year = "` + category + `" )
                    GROUP BY Albums.albumName
                    ORDER BY Albums.albumName;`

    console.log(query)

    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

app.get("/api/getAlbums", (req, res) => {
    const query = `SELECT * FROM Albums;`
    const token = req.query.token;
    var info

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);

    //     axios.post (`https://api.spotify.com/v1/albums/${link}/tracks`, {
    //         headers: {
    //                     Authorization: `Bearer ${token}`,
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',},
    //         })
    //         .then(res => {
    //             // setAlbumInfo(albumInfo => [...albumInfo, [res.data["items"]]])
    //             info = res.data["items"]

    //             console.log(info)
    //             // console.log("api call")

    //         })
    //         .catch(err => console.log(err));
        res.send(result)
    });

    // get the tracks per album
    

            //fir loop albums and add tracks before send 
});

app.get("/api/getAllAlbums", (req, res) => {
    const category = req.query.category;

    console.log(category)
    // console.log(req)
    let query = ""

    if (category == "All") {
        query = `SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year, Albums.link, Albums.cover
                    FROM Albums
                    INNER JOIN Members ON Albums.artistID = Members.memberID
                    GROUP BY Albums.albumName
                    ORDER BY Albums.year;`
    }
    else {
        query = `SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year, Albums.link, Albums.cover
                    FROM Albums
                    INNER JOIN Members ON Albums.artistID = Members.memberID
                    GROUP BY Albums.year
                    ORDER BY Albums.year;`
    }

    

    console.log(query)

    db.query(query, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result)
    })
});

// calls for spotify API
// maybe api call for all albums and then jsut insert to DB
app.get ("/api", (req, res) => {
    
        var token = Buffer.from(`${process.env.spotifyClient}:${process.env.spotifySecret}`, 'utf-8').toString('base64')
        axios.post (`https://accounts.spotify.com/api/token`, {grant_type: 'client_credentials'}, {
            method: 'POST',
            grant_type :'client_credentials',
            headers: { 
              'Authorization': `Basic ${token}`,
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'},
            })
            .then(result => {
                console.log(result.data)
                res.send(result.data)
                
            })
            .catch(err => console.log(err));
});


app.listen(5000, () => {
    console.log("running on port 5000");
});
