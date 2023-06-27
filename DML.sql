-- 		INSERT INTO Nations (nationName, conquestsQuantity, shipQuantity) 
-- 		VALUES(:countryName, :numConquests, :numShips);

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
		SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias FROM Members GROUP BY fullName;
        
		-- select members by specified last name OR first name (w out other known aliases)
       SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName , Members.alias FROM Members WHERE (Members.lastName = "" OR Members.firstName = "") GROUP BY fullName;
        
        -- select members by ID
        SELECT Members.memberID, CONCAT(Members.lastName, " ", Members.firstName) AS fullName, Members.alias FROM Members WHERE Members.memberID = :fromDropdown
        
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
            WHERE (Members.lastName = "kim" OR Members.firstName = "" OR Members.alias = "" OR Albums.albumName = "")
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
-- 		VIDEOS
-- ----------------------------
	-- INSERT
		INSERT INTO Videos (name, description, platformID, link)
			VALUES	(:vidName, :desc, :platformID, :link);

	-- SELECT
		-- select all videos
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name, Videos.link, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags
			FROM Videos
            INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select videos by platform
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Platforms.name, Videos.link, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags
			FROM Videos
            INNER JOIN Platforms ON Videos.platformID = Platforms.platformID
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Platforms.platformID = :platformID
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select videos by tags (act like categories)
        SELECT Videos.videoID, Videos.name, Videos.description, Videos.platformID, Videos.link, GROUP_CONCAT(DISTINCT Tags.tagID ORDER BY Tags.tagID ASC) as tagID, GROUP_CONCAT(DISTINCT Tags.tag ORDER BY Tags.tag ASC SEPARATOR ', ') as tags
			FROM Videos
            INNER JOIN VideoTags ON Videos.videoID = VideoTags.videoID
            INNER JOIN Tags ON VideoTags.tagID = Tags.tagID
            WHERE Tags.tag = :inputbydropdown
            GROUP BY Videos.videoID
            ORDER BY Videos.name;
        
        -- select all videos that contain the phrase ''
        
        -- select videos that contain specific members
        
        -- select videos from a specific platform 
        
        -- select five random videos for opening page
		
            
	-- UPDATE
		

	-- DELETE
	
    
-- ----------------------------
-- 		TAGS
-- ----------------------------
	-- INSERT
		INSERT INTO Tags (name)
			VALUES	(:tag)

	-- SELECT
		
            
	-- UPDATE
		

	-- DELETE
	
    
-- ----------------------------
-- 		VIDEO TAGS
-- ----------------------------
	-- INSERT
		INSERT INTO VideoTags (videoID, tagID)
			VALUES	(:vidID, :tagID);

	-- SELECT
		-- select all tags
		
            
	-- UPDATE
		

	-- DELETE
	
    
-- ----------------------------
-- 		STARRING
-- ----------------------------
	-- INSERT
		INSERT INTO Starring (videoID, artistID)
			VALUES	(:vidID, :memberID)

	-- SELECT
		-- select all artists from a video 
		
        -- VideoTags.tagID, Tags.tag
            
	-- UPDATE
		

	-- DELETE
	
    