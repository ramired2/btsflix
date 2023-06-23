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
        
            
	-- UPDATE
		UPDATE members SET koreanName = :kn, lastName = :ln, firstName = :fn, alias = :alias WHERE memberID = :memID; 
		

	-- DELETE
		DELETE FROM NATIONS WHERE memberID = :memID;
    
-- ----------------------------
-- 		ALBUMS
-- ----------------------------
	-- INSERT
		INSERT INTO Albums (albumName, artistID, year)
			VALUES	(:album, :singer, :year);

	-- SELECT
		-- select album from specific year 
        
        
        -- select album specified by member
        
        
        -- select album from multiple members
        
        
        -- select albums including members named ''
		
            
	-- UPDATE
		UPDATE Albums SET albumName = :albumName, artistID = :singer, year = :year;

	-- DELETE
		DELETE FROM Albums WHERE albumID = :albumID

-- ----------------------------
-- 		PLATFORMS
-- ----------------------------
	-- INSERT
		INSERT INTO Platforms (name, numVideos)
			VALUES	(:name, :numVid);

	-- SELECT
		
            
	-- UPDATE
		

	-- DELETE
	
    
-- ----------------------------
-- 		VIDEOS
-- ----------------------------
	-- INSERT
		INSERT INTO Videos (name, description, platformID, link)
			VALUES	(:vidName, :desc, :platformID, :link);

	-- SELECT
		
            
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
	
    