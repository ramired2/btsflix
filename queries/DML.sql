-- ----------------------------
-- 		MEMBERS
-- ----------------------------
	-- INSERT
        INSERT INTO members(koreanName, lastName, firstName, alias)
			VALUES	(:kn , :ln, :fn, :alias);

	-- SELECT -- unless specified order by their fanchant 
		-- select all members
        SELECT * FROM Members;
        
        -- select all members w out other known aliases (like suga, agustD, prodD)
		SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias 
			FROM Members GROUP BY fullName;
        
		-- select members by specified last name OR first name (w out other known aliases)
       SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName , Members.alias 
			FROM Members 
            WHERE (Members.lastName = :"" OR Members.firstName = :"") 
            GROUP BY fullName;
        
        -- select members by ID
        SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias 
			FROM Members 
            WHERE Members.memberID = :fromDropdown
        
        -- select all people starring in a video
        SELECT Starring.videoID, Starring.artistID, Members.memberID, Members.alias, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.lastName as ln
			FROM Starring 
            INNER JOIN Videos ON Starring.videoID = Videos.videoID
            INNER JOIN Members ON Starring.artistID = Members.memberID
            WHERE Videos.videoID = :videoID
            ORDER BY Members.lastName ASC;
            
	-- UPDATE
		UPDATE members SET koreanName = :kn, lastName = :ln, firstName = :fn, alias = :alias WHERE memberID = :memID; 
		
	-- DELETE
		DELETE FROM Members WHERE memberID = :memID;
    
-- ----------------------------
-- 		ALBUMS
-- ----------------------------
	-- INSERT
		INSERT INTO Albums (albumName, artistID, year)
			VALUES	(:album, :singer, :year);

	-- SELECT
		-- select all albums 
        SELECT * FROM Albums;
        
		-- select album from specific year 
        SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year
			FROM Albums
            INNER JOIN Members ON Albums.artistID = Members.memberID
            WHERE Albums.year = :userInput
            ORDER BY Albums.albumName ASC;
        
        -- select album specified by member ID
        SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year
			FROM Albums
            INNER JOIN Members ON Albums.artistID = Members.memberID
            WHERE Albums.artistID = :dropDownMenu
            ORDER BY Albums.year;
        
        -- select album from mult members names, alias, album name, year
        SELECT Albums.albumID, Albums.albumName, Albums.artistID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias, Albums.year
			FROM Albums
            INNER JOIN Members ON Albums.artistID = Members.memberID
            WHERE (Members.lastName = :"" OR Members.firstName = :"" OR Members.alias = :"" OR Albums.albumName = :"")
            ORDER BY Albums.albumName;
            
	-- UPDATE
		UPDATE Albums SET albumName = :albumName, artistID = :singer, year = :year WHERE Albums.albumID = :input;

	-- DELETE
		DELETE FROM Albums WHERE albumID = :albumID;

-- ----------------------------
-- 		PLATFORMS
-- ----------------------------
	-- INSERT
		INSERT INTO Platforms (name, numVideos)
			VALUES	(:name, :numVid);

	-- SELECT
		-- select all platforms
		SELECT * FROM Platforms;
            
	-- UPDATE
		-- update all parts of platform
		UPDATE Platforms SET name = :platformName, numVideos = :num vids;
        
        -- update number of vids by x (for when a new video was added +1 or a video was removed -1)
        UPDATE Platforms SET numVideos = numVideos -+ 1 WHERE platformID = :platformID;
        

	-- DELETE
		DELETE FROM Platforms WHERE platformID = :platformID;
	
    
-- ----------------------------
-- 		THUMBNAILS
-- ----------------------------
	-- INSERT
    INSERT INTO Thumbnails (thumbnail) VALUES (:link);
	-- SELECT
    SELECT * FROM Thumbnails;
    
    -- UPDATE
    UPDATE Thumbnails SET thumbnail = :newLink WHERE thumbnailID = :id;
    
    -- DELETE
    DELETE FROM Thumbnails WHERE thumbnailID = :id
    
-- ----------------------------
-- 		VIDEOS
-- ----------------------------
	-- INSERT
		INSERT INTO Videos (name, description, platformID, link, thumbnail)
			VALUES	(:vidName, :desc, :platformID, :link, :thumbnailLink);

	-- SELECT
		-- select all videos
        SELECT * FROM Videos;
        
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name as platformName, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
		GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, IFNULL(GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', '), "") as starring
			FROM Videos
            INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
            INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select videos by platform
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
        GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
			FROM Videos
            INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
            INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Platforms.platformID = :platformID
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select videos by tags (act like categories)
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
        GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
			FROM Videos
            INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Tags.tag = :inputbydropdown
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select all videos that contain the phrase '' in the name or in the tags // helpful for gen search 
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
        GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
			FROM Videos
            INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Videos.name LIKE :'%%' OR Tags.tag LIKE :'%%' OR Members.alias LIKE :'%%'-- quotes r same
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select videos that contain specific member // NOT FULL STARRING RETURNED 
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, Thumbnails.thumbnail, Videos.videoID as videoContained, 
        GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, 
				(SELECT GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring 
				FROM MEMBERS 
                LEFT JOIN Starring ON Starring.artistID = Members.memberID 
                INNER JOIN Videos ON Starring.videoID = Videos.videoID 
                INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
                WHERE Videos.videoID = videoContained) as starred
			FROM Videos
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE members.memberID = :memberID -- might have to add name or alias feature here too 
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select four random videos for opening page by videoID
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name, Videos.link, Thumbnails.thumbnail, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, 
		GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags, GROUP_CONCAT(DISTINCT Members.alias SEPARATOR ', ') as starring
			FROM Videos
            INNER JOIN Thumbnails ON Videos.thumbnailID = Thumbnails.thumbnailID
            INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            LEFT JOIN Starring ON Videos.videoID = Starring.videoID
            LEFT JOIN Members ON Starring.artistID = Members.memberID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Videos.videoID = :randNum OR Videos.videoID = :randNum OR Videos.videoID = :randNum OR Videos.videoID = :randNum
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
            
	-- UPDATE
		UPDATE Videos SET name = :name, description = :desc, platformID = (SELECT PlatformID FROM Platforms WHERE Platforms.name = :platformName), link = :link 
			WHERE Videos.videoID = :vidId;
        
        -- manually insert platform name -- if id rem select and just put id from dropdown
		UPDATE Videos SET platformID = (SELECT PlatformID FROM Platforms WHERE Platforms.name = :platformName) WHERE Videos.videoID = :vidID;

	-- DELETE
	DELETE FROM Videos WHERE Videos.videoID = :videoID
    
-- ----------------------------
-- 		TAGS
-- ----------------------------
	-- INSERT
		INSERT INTO Tags (name)
			VALUES	(:tag)

	-- SELECT
		SELECT * FROM Tags ORDER BY tag;
            
	-- UPDATE
		UPDATE Tags SET tag = :tag;

	-- DELETE
	DELETE FROM Tags WHERE tagID = :tagID
    
-- ----------------------------
-- 		VIDEO TAGS
-- ----------------------------
	-- INSERT
		INSERT INTO VideoTags (videoID, tagID)
			VALUES	(:vidID, :tagID);

	-- SELECT
		-- select all
        SELECT * FROM VideoTags;
        
        SELECT VideoTags.videoID, Videos.name, GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags
			FROM VideoTags
			INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
			INNER JOIN Videos ON VideoTags.videoID = Videos.videoID
			GROUP BY VideoTags.videoID
			ORDER BY Videos.Name;
            
	-- UPDATE
		-- no need for update can just delete relation

	-- DELETE
	DELETE FROM VideoTags WHERE videoTagsID = :videotagID
    
-- ----------------------------
-- 		STARRING
-- ----------------------------
	-- INSERT
		INSERT INTO Starring (videoID, artistID)
			VALUES	(:vidID, :memberID);

	-- SELECT
		SELECT * FROM Starring;
        
		-- select all artists from a video by id
        SELECT Videos.videoID, Members.alias as starring, CONCAT(Members.lastName, ' ', Members.firstName) as fullName
				FROM MEMBERS 
                LEFT JOIN Starring ON Starring.artistID = Members.memberID 
                INNER JOIN Videos ON Starring.videoID = Videos.videoID 
                WHERE Videos.videoID = :vidID;
            
	-- UPDATE 
		UPDATE Starring SET artistID = :artistID  WHERE videoID = :videoIn;
        UPDATE Starring SET videoID = :videoIn WHERE artistID = :artistID;

	-- DELETE
	DELETE FROM Starring WHERE starringID = :starringID;
    