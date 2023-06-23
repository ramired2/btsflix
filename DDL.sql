SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

DROP TABLE IF EXISTS Members;
DROP TABLE IF EXISTS Albums;
DROP TABLE IF EXISTS Starring;
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
    albumName VARCHAR(45),
    artistID INT NOT NULL,
    year int,
    PRIMARY KEY (albumID),
    FOREIGN KEY (artistID) REFERENCES Members(memberID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Starring (
	videoID INT,
	artistID INT,
    FOREIGN KEY (videoID) REFERENCES Videos(videoID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (artistID) REFERENCES Members(memberID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Videos (
	videoID INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(200),
    description MEDIUMTEXT,
    platformID INT NOT NULL,
    link VARCHAR(255),
    PRIMARY KEY (videoID),
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
    name VARCHAR (45) NOT NULL,
    PRIMARY KEY (tagID)
);

CREATE TABLE VideoTags (
    videoID INT NOT NULL,
    tagID INT NOT NULL,
    FOREIGN KEY (videoID) REFERENCES Videos(videoID)  ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (tagID) REFERENCES Tags(tagID) ON DELETE CASCADE ON UPDATE CASCADE
);


-- Data insertion

INSERT INTO members(koreanName, lastName, firstName, alias)
VALUES	("김남준" , "Kim", "Namjoon", "RM"),
		("김석진", "Kim", "Seokjin", "Jin"),
        ("민윤기", "Min", "Yoongi", "Suga"),
        ("정호석", "Jung", "HoSeok", "J-Hope"),
        ("박지민", "Park", "Jimin", "Jimin"),
        ("김태형", "Kim", "Taehyung", "V"),
        ("전정국", "Jeon", "Jungkook", "Jungkook"),
        ("방탄소년단", "Bangtan", "Boys", "BTS");
        
INSERT INTO Albums (albumName, artistID, year)
VALUES	("Mono", 1, 2018),
		("D-2", 3, 2020),
        ("Map of the Soul Persona", 8, 2019),
        ("Jack in the Box", 4, 2022);
        
INSERT INTO Platforms (name, numVideos)
VALUES	("Youtube", 3),
		("Weverse", 0);
        
INSERT INTO Videos (name,
					description,
					platformID,
					link)
VALUES	("Run BTS! 2015 EP.1 - Open", "First episode of Run BTS!", 1, "https://www.youtube.com/watch?v=5XisXVcbZEw&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz"),
		("Run BTS! 2015 EP.2 - 최고의 남자", "", 1, "https://www.youtube.com/watch?v=fJa1DMVB0vc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=2"),
        ("Run BTS! 2015 EP.3 - Theme Park", "BTS goes to a themepark", 1, "https://www.youtube.com/watch?v=HMG7jim0Bqc&list=PL5hrGMysD_Gut5B6Mms1bpkv44LoOwEHz&index=3"),
        ("161227 밥 먹는 김석진", "", 1, "https://www.youtube.com/watch?v=7fszwWLFAng");
        
INSERT INTO Tags (name)
VALUES	("Run BTS!"),
		("Live"),
        ("Comedy"),
        ("Thriller"),
        ("EAT Jin");
        
INSERT INTO VideoTags (videoID, tagID)
VALUES	(1, 1),
		(2, 3),
        (3, 4),
        (4, 5);
        
INSERT INTO Starring (videoID, artistID)
VALUES	( 1, 8),
		( 1, 1),
        ( 1, 5),
		( 2, 8),
        ( 2, 3),
        ( 2, 6),
        ( 2, 1),
        ( 4, 2);

SET FOREIGN_KEY_CHECKS=1;
COMMIT;