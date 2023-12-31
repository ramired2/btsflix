SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

DROP TABLE IF EXISTS Members;
DROP TABLE IF EXISTS Albums;
DROP TABLE IF EXISTS Starring;
DROP TABLE IF EXISTS Thumbnails;
DROP TABLE IF EXISTS Videos;
DROP TABLE IF EXISTS Platforms;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS VideoTags;

-- Table Creations

CREATE TABLE Members (
	memberID INT AUTO_INCREMENT UNIQUE NOT NULL,
    koreanName VARCHAR(45) NOT NULL,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    alias VARCHAR(45) NOT NULL default "No known alias",
    PRIMARY KEY (memberID)
);

CREATE TABLE Albums (
	albumID INT AUTO_INCREMENT NOT NULL,
    albumName VARCHAR(255),
    artistID INT NOT NULL,
    year int,
    cover VARCHAR(255),
    link VARCHaR(255),
    PRIMARY KEY (albumID),
    FOREIGN KEY (artistID) REFERENCES Members(memberID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Starring (
	starringID INT AUTO_INCREMENT NOT NULL,
	videoID INT,
	artistID INT,
    PRIMARY KEY (starringID),
    FOREIGN KEY (videoID) REFERENCES Videos(videoID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (artistID) REFERENCES Members(memberID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Thumbnails (
	thumbnailID INT AUTO_INCREMENT NOT NULL,
    thumbnail VARCHAR(255),
    PRIMARY KEY(thumbnailID)
    );

CREATE TABLE Videos (
	videoID INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(200),
    description MEDIUMTEXT,
    platformID INT NOT NULL,
    link VARCHAR(255),
    released date,
    thumbnailID int,
    PRIMARY KEY (videoID),
    FOREIGN KEY (thumbnailID) REFERENCES Thumbnails(thumbnailID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (platformID) REFERENCES Platforms(platformID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Platforms (
	platformID INT AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL,
    numVideos INT default 0,
    PRIMARY KEY (platformID)
);

CREATE TABLE Tags (
    tagID INT AUTO_INCREMENT NOT NULL,
    tag VARCHAR (45) NOT NULL UNIQUE,
    PRIMARY KEY (tagID)
);

CREATE TABLE VideoTags (
	videoTagsID INT AUTO_INCREMENT NOT NULL,
    videoID INT NOT NULL,
    tagID INT NOT NULL,
    PRIMARY KEY (videoTagsID),
    FOREIGN KEY (videoID) REFERENCES Videos(videoID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tagID) REFERENCES Tags(tagID) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Data insertion

INSERT INTO members(koreanName, lastName, firstName, alias)
VALUES	("김남준" , "Kim", "Namjoon", "RM"),
		("김석진", "Kim", "Seokjin", "Jin"),
        ("민윤기", "Min", "Yoongi", "Suga"),
        ("정호석", "Jung", "Hoseok", "JHope"),
        ("박지민", "Park", "Jimin", "Jimin"),
        ("김태형", "Kim", "Taehyung", "V"),
        ("전정국", "Jeon", "Jungkook", "Jungkook"),
        ("방탄소년단", "Bangtan", "Boys", "BTS"),
        ("민윤기", "Min", "Yoongi", "AgustD"),
        ("전정국", "Jeon", "Jungkook", "jk");
        -- -- ("정호석", "Jung", "Hoseok", "J-Hope")
        
        
INSERT INTO Albums (albumName, artistID, cover, link, year)
VALUES	("Mono.", 1, "mono.png", "1vsTrL1h2bRHP1kUPvlIyb", 2018),
		("D-2", 3, "d2.jpg", "7lhFsAaVCFaYbkNvBMw5Zf?si=f5af0d8e5052467e", 2020),
        ("Map of the Soul Persona", 8, "persona.png", "2KqlAl1Kl5fZvbFgJ0qFB6", 2019),
        ("Jack in the Box", 4, "jackinthebox.png", "0FrC9lzgVhziJenigsrXdl", 2022);
        
INSERT INTO Platforms (name, numVideos)
VALUES	("Youtube", 3),
		("Weverse", 0);
        
INSERT INTO Thumbnails (thumbnail)
VALUES	("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8X6EjlPz3Xf5qI9VBS5jUGum1uJtcwqZSS_qXRoY8M8ZmDE-f"),
		("https://static.wikia.nocookie.net/the-bangtan-boys/images/d/d9/RUN_BTS_Logo_S3.png/revision/latest?cb=20190525022425");
        
INSERT INTO Videos (name,
					description,
					platformID,
					link,
                    released,
                    thumbnailID)
VALUES	(
        "Run BTS! EP.1: Open",
        "MC: none\nTeams: none\nBTS present a theme song for V app introduce the new platform and themselves, and discuss their hopes for the show",
        1,
        "https://www.youtube.com/embed/5XisXVcbZEw",
        "2015-08-01",
        1
    ),
    (
        "Run BTS! EP.2: The Greatest Man",
        "MC: none\nTeams: none\nBTS participate in a three-round competition to determine the Best Man among them. They compete in a patience test to see who can hold water in their mouth the longest without spitting it out while being tickled, a sexy lips game to see who has the widest mouth, and a cushion version of musical chairs. Jungkook wins two of the three rounds and receives the Best Man badge as his prize",
        1,
        "https://www.youtube.com/embed/fJa1DMVB0vc",
        "2015-08-02",
        1
    ),
    (
        "Run BTS! EP.3: Theme Park",
        "MC: none\nTeams: none\nBTS go to an amusement park and complete challenges while on rides",
        1,
        "https://www.youtube.com/embed/HMG7jim0Bqc",
        "2015-08-18",
        1
    ),
    (
        "Run BTS! EP.4: 30-second Mission",
        "MC: none\nTeams: none\nBTS play three games in a swimming pool: Jenga (using chopsticks), paper crane unfolding, and emptying half a bottle of Coca-Cola into an empty one. Jimin successfully completes all challenges and is selected as the day's MVP. V, Suga, and Jin each receive penalities and have to drink garlic juice",
        1,
        "https://www.youtube.com/embed/LwOKT0qcX8I",
        "2015-09-15",
        1
    );
        
INSERT INTO Tags (tag)
VALUES	("Run BTS!"),
		("introduction"),
        ("indoor"),
        ("games"),
        ("theme park");
        
INSERT INTO VideoTags (videoID, tagID)
VALUES	(1, 1),
		(1, 2),
        (2, 1),
		(2, 3),
        (3, 1),
        (3, 5),
        (4, 1),
        (4, 4);
        
INSERT INTO Starring (videoID, artistID)
VALUES	( 1, 3),
		( 1, 2),
		( 1, 1),
        ( 1, 4),
        ( 1, 6),
        ( 1, 7),
        ( 1, 5),
		( 2, 7),
        ( 2, 3),
        ( 2, 6),
        ( 2, 2),
        ( 2, 4),
        ( 2, 5),
        ( 2, 1),
        ( 3, 1),
        ( 3, 2),
        ( 3, 3),
        ( 3, 4),
        ( 3, 5),
        ( 3, 6),
        ( 3, 7),
        ( 4, 1),
        ( 4, 2),
        ( 4, 3),
        ( 4, 4),
        ( 4, 5),
        ( 4, 6),
        ( 4, 7);
    

SET FOREIGN_KEY_CHECKS=1;
COMMIT;