-- 		INSERT INTO Nations (nationName, conquestsQuantity, shipQuantity) 
-- 		VALUES(:countryName, :numConquests, :numShips);

-- ----------------------------
-- 		MEMBERS
-- ----------------------------
	-- INSERT
        INSERT INTO members(koreanName, lastName, firstName, alias)
			VALUES	(:kn , :ln, :fn, :alias);

	-- SELECT
		-- select all members
        
        
		-- select members by specified last name
       
       
        -- select members by specified first name
        
        
        -- select members by ID
        
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
        
        
		-- select album from specific year 
        
        
        -- select album specified by member
        
        
        -- select album from multiple members
        
        
        -- select albums including members named ''
		
            
	-- UPDATE
		UPDATE Albums SET albumName = :albumName, artistID = :singer, year = :year;

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
		
            
	-- UPDATE
		-- update all parts of platform
		UPDATE Platforms SET name = :platformName, numVideos = :num vids;
        
        -- update number of vids by x amnt
        

	-- DELETE
		DELETE Platforms WHERE platformID = :platformID
	
    
-- ----------------------------
-- 		VIDEOS
-- ----------------------------
	-- INSERT
		INSERT INTO Videos (name, description, platformID, link)
			VALUES	(:vidName, :desc, :platformID, :link);

	-- SELECT
		-- select all videos
        
        -- select videos by platform
        
        -- select videos by tags (act like categories)
        
        -- get all categories for a specific video
        
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
		
            
	-- UPDATE
		

	-- DELETE
	
    
-- ----------------------------
-- 		STARRING
-- ----------------------------
	-- INSERT
		INSERT INTO Starring (videoID, artistID)
			VALUES	(:vidID, :memberID)

	-- SELECT
		
            
	-- UPDATE
		

	-- DELETE
	
    