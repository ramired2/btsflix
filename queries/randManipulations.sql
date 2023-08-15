SELECT * FROM VIDEOS WHERE videoID = 99;

SET FOREIGN_KEY_CHECKS=0;
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;
DROP TABLE IF EXISTS Albums;
CREATE TABLE Albums (
	albumID INT AUTO_INCREMENT NOT NULL,
    albumName VARCHAR(255),
    artistID INT NOT NULL,
    year int,
    cover VARCHAR(255),
    link VARCHAR(255),
    PRIMARY KEY (albumID),
    FOREIGN KEY (artistID) REFERENCES Members(memberID) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Albums (albumName, artistID, cover, link, year)
VALUES	("Mono.", 1, "mono.png", "1vsTrL1h2bRHP1kUPvlIyb", 2018),
		("D-2", 3, "d2.jpg", "7lhFsAaVCFaYbkNvBMw5Zf?si=f5af0d8e5052467e", 2020),
        ("Map of the Soul Persona", 8, "persona.png", "2KqlAl1Kl5fZvbFgJ0qFB6", 2019),
        ("Jack in the Box", 4, "jackinthebox.png", "0FrC9lzgVhziJenigsrXdl", 2022),
        ("2 COOL 4 SKOOL", 8, "2kool4skool.jpg", "6egaEe9JaULuUCkihSnYlH", 2013),
		("O!RUL8,2?", 8, "orul82.jpg", "6rWmdSJIaGTVtdMJQ35Lvf", 2013),
        ("SKOOL LUV AFFAIR", 8, "skoolluvaffair.jpg", "5r35iS0uSSoQBKzQj0IeI3", 2014),
        ("DARK & WILD", 8, "darknwild.jpg", "35voVqYGkotyJ945O9egDY", 2014),
		("The most beautiful moment in life pt.1", 8, "lifept1.jpg", "0mEeCuKJQ8Xh9tQ5dMm89X", 2015),
        ("The most beautiful moment in life pt.2", 8, "lifept2.jpg", "2ds8iT4wkaN1Q1gZe1qcOD", 2015),
        ("The most beautiful moment in life: Young Forever", 8, "forever.jpg", "1k5bJ8l5oL5xxVBVHjil09", 2016),
        ("WINGS", 8, "wings.jpg", "1vhNGBTFoaSTLbHjPGFIlF", 2016),
		("YOU NEVER WALK ALONE", 8, "neverwalkalone.jpg", "6THpewjqJ15ORBJkh5CEYb", 2017),
        ("LOVE YOURSELF 'HER'", 8, "her.jpg", "4NIqCxqP9o8Tp6tGLBqd8O", 2018),
        ("LOVE YOURSELF 'TEAR'", 8, "tear.jpg", "07Rq17GzCnIdWJcyVHb57G", 2017),
        ("LOVE YOURSELF 'ANSWER'", 8, "answer.jpg", "43wFM1HquliY3iwKWzPN4y", 2018),
        ("MAP OF THE SOUL: 7", 8, "7.jpg", "5W1XY5ucNATjTULERvXx9j", 2020),
        ("DYNAMITE", 8, "dynamite.jpg", "1Yo63a5AzPMyHiYMKYIrld", 2020),
        ("BE", 8, "be.jpg", "6nYfHQnvkvOTNHnOhDT3sr", 2020),
        ("BUTTER", 8, "butter.jpg", "0PBQ3Cp6NG8WX0G9KQVNMP", 2021),
        ("Proof", 8, "proof.png", "6al2VdKbb6FIz9d7lU7WRB", 2022),
        ("Take Two", 8, "taketwo.jpg", "3jeQDa9OFZ6GndLindHx3k", 2023),
        ("D-Day", 3, "dday.png", "446ROKmKfpEwkbi2SjELVX", 2023),
        ("Agust D", 3, "agustd.jpg", "1qHUxg0YIm6caZQrDJvDdk", 2023),
        ("Indigo", 1, "indigo.jpg", "2wGinO7YWLHN2sULIr4a7v", 2022),
        ("Hope World", 4, "hopeworld.jpg", "0XX1044L7ovU5aon6nRiF7", 2018),
        ("Face", 5, "face.png", "4xc3Lc9yASZgEJGH7acWMB", 2023),
        ("Still With You", 7, "stillwu.jpg", "0i3baFZqWSrjjgTWrhKunB", 2020),
        ("Seven (feat. Latto)", 7, "seven.jpeg", "53985D8g3JcGBoULSOYYKX", 2023),
        ("Stay Alive (Prod. SUGA of BTS)", 7, "stayalive.jpg", "6nvSZLAsbg56fGSCVm8fL9", 2022),
        ("Stay Alive (Prod. SUGA of BTS)", 3, "stayalive.jpg", "6nvSZLAsbg56fGSCVm8fL9", 2022),
        ("Our Beloved Summer (Original Television Soundtrack), Pt.5", 6, "beloved.jpg", "4210mSQ3r10AsJMZEYAH5l", 2021),
        ("ITAEWON CLASS (Original Television Soundtrack) Pt.12", 6, "itaewon.jpg", "3Y0g1Cgg3DPMvNoaOgfeT7", 2020),
        ("HWARANG, Pt.2 (Music from the original TV Series)", 2, "hwarang.jpg", "0sL76PXbgRh97MTzadqEMa", 2016),
        ("The Astronaut", 2, "astro.jpg", "6nT2VfGN07ar1vdZyJY6ox", 2022),
        ("Super Tuna", 2, "supertuna.jpg", "7vreT3Vciy3cTiidhsw9Y2", 2021),
        ("Jirisan (Original Television Soundtrack) Pt.4", 2, "jirisan.jpg", "145FYiluHlYCPGO2MOLhU4", 2021),
        ("Abyss", 2, "abyss.jpg", "0vyG4FyBIHURVJjQT0RDvG", 2020),
        ("Tonight", 2, "tonight.jpg", "4CwQ2ExjGm91njJC8dWWiv", 2019),
        ("Change", 1, "change.jpg", "1XNlRfQuMTW3IF0z0dUZgq", 2017);
        
SET FOREIGN_KEY_CHECKS=1;
COMMIT;