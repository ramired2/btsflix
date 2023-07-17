const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const mysql = require("mysql2")

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8432Befly",
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
                    ORDER BY Videos.name;`

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
                        WHERE Videos.name LIKE "%` + search + `%" OR Tags.tag LIKE "%` + search + `%" OR Members.alias LIKE "%` + search + `%"
                        GROUP BY Videos.videoID
                        ORDER BY Videos.name;`

                        console.log(query)

    db.query(query, (err, result) => {
        if (err) throw err;
        // console.log(result);
        res.send(result)
    })
});

app.listen(5000, () => {
    console.log("running on port 5000");
});
