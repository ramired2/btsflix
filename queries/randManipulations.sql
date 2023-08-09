SELECT * FROM VIDEOS WHERE videoID = 48;

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
VALUES	("Mono.", 1, "mono.png", "https://open.spotify.com/album/1vsTrL1h2bRHP1kUPvlIyb", 2018),
		("D-2", 3, "d2.jpg", "https://open.spotify.com/album/7lhFsAaVCFaYbkNvBMw5Zf?si=2d228857805546f5", 2020),
        ("Map of the Soul Persona", 8, "persona.png", "https://open.spotify.com/album/2KqlAl1Kl5fZvbFgJ0qFB6?highlight=spotify:track:2GXWzWPsYlTZcvVW8JIu69", 2019),
        ("Jack in the Box", 4, "jackinthebox.png", "https://open.spotify.com/album/0FrC9lzgVhziJenigsrXdl?si=42711c8878294be4", 2022),
		("2 COOL 4 SKOOL", 8, "2kool4skool.jpg", "https://open.spotify.com/album/6egaEe9JaULuUCkihSnYlH", 2013),
		("O!RUL8,2?", 8, "orul82.jpg", "https://open.spotify.com/album/6rWmdSJIaGTVtdMJQ35Lvf?si=tqnEn1nIQQ2ygNHjIab06Q", 2013),
        ("SKOOL LUV AFFAIR", 8, "skoolluvaffair.jpg", "https://open.spotify.com/album/5r35iS0uSSoQBKzQj0IeI3?si=57f52f932c494117", 2014),
        ("DARK & WILD", 8, "darknwild.jpg", "https://open.spotify.com/album/35voVqYGkotyJ945O9egDY?si=957dd87022234680", 2014),
		("The most beautiful moment in life pt.1", 8, "lifept1.jpg", "https://open.spotify.com/album/0mEeCuKJQ8Xh9tQ5dMm89X?si=f47e66e9a89d4efa", 2015),
        ("The most beautiful moment in life pt.2", 8, "lifept2.jpg", "https://open.spotify.com/album/2ds8iT4wkaN1Q1gZe1qcOD?si=7f8927927ce840bf", 2015),
        ("The most beautiful moment in life: Young Forever", 8, "forever.jpg", "https://open.spotify.com/album/1k5bJ8l5oL5xxVBVHjil09?si=85e327dc30c341f8", 2016),
        ("WINGS", 8, "wings.jpg", "https://open.spotify.com/album/1vhNGBTFoaSTLbHjPGFIlF?si=850c71b10c624ef4", 2016),
		("YOU NEVER WALK ALONE", 8, "neverwalkalone.jpg", "https://open.spotify.com/album/6THpewjqJ15ORBJkh5CEYb?si=b2f12fb3c9734673", 2017),
        ("LOVE YOURSELF 'HER'", 8, "her.jpg", "https://open.spotify.com/album/4NIqCxqP9o8Tp6tGLBqd8O?si=78ee37ad877d498f", 2018),
        ("LOVE YOURSELF 'TEAR'", 8, "tear.jpg", "https://open.spotify.com/album/07Rq17GzCnIdWJcyVHb57G?si=19b1dcaa48f04cce", 2017),
        ("LOVE YOURSELF 'ANSWER'", 8, "answer.jpg", "https://open.spotify.com/album/43wFM1HquliY3iwKWzPN4y?si=5b045fc2f6924e09", 2018),
        ("MAP OF THE SOUL: 7", 8, "7.jpg", "https://open.spotify.com/album/5W1XY5ucNATjTULERvXx9j?si=1afe274ee5b14ea9", 2020),
        ("DYNAMITE", 8, "dynamite.jpg", "https://open.spotify.com/album/1Yo63a5AzPMyHiYMKYIrld?si=6143f9cf33554830", 2020),
        ("BE", 8, "be.jpg", "https://open.spotify.com/album/6nYfHQnvkvOTNHnOhDT3sr?si=3d598b76b27d42c0", 2020),
        ("BUTTER", 8, "butter.jpg", "https://open.spotify.com/album/0PBQ3Cp6NG8WX0G9KQVNMP?si=3aaeac7c75a145c2", 2021),
        ("Proof", 8, "proof.jpg", "https://open.spotify.com/album/6al2VdKbb6FIz9d7lU7WRB?si=fc8fac0f29584602", 2022),
        ("Take Two", 8, "taketwo.jpg", "https://open.spotify.com/album/3jeQDa9OFZ6GndLindHx3k?si=723c4c49be0a4d4f", 2023),
        ("D-Day", 3, "dday.png", "https://open.spotify.com/album/446ROKmKfpEwkbi2SjELVX?si=c44a3ff3fac846f0", 2023),
        ("Agust D", 3, "agustd.jpg", "https://open.spotify.com/album/1qHUxg0YIm6caZQrDJvDdk?si=c209623b3c944f19", 2023),
        ("Indigo", 1, "indigo.jpg", "https://open.spotify.com/album/2wGinO7YWLHN2sULIr4a7v?si=900ada9974eb436a", 2022),
        ("Hope World", 4, "hopeworld.jpg", "https://open.spotify.com/album/0XX1044L7ovU5aon6nRiF7?si=2e37dce0126849b4", 2018),
        ("Face", 5, "face.png", "https://open.spotify.com/album/4xc3Lc9yASZgEJGH7acWMB?si=44d0d19313654f4d", 2023),
        ("Still With You", 7, "stillwu.jpg", "https://open.spotify.com/album/0i3baFZqWSrjjgTWrhKunB?si=cfef5d36c47f402a", 2020),
        ("Seven (feat. Latto)", 7, "seven.jpeg", "https://open.spotify.com/album/53985D8g3JcGBoULSOYYKX", 2023),
        ("Stay Alive (Prod. SUGA of BTS)", 7, "stayalive.jpg", "https://open.spotify.com/album/6nvSZLAsbg56fGSCVm8fL9", 2022),
        ("Stay Alive (Prod. SUGA of BTS)", 3, "stayalive.jpg", "https://open.spotify.com/album/6nvSZLAsbg56fGSCVm8fL9", 2022),
        ("Our Beloved Summer (Original Television Soundtrack), Pt.5", 6, "beloved.jpg", "https://open.spotify.com/album/4210mSQ3r10AsJMZEYAH5l", 2021),
        ("ITAEWON CLASS (Original Television Soundtrack) Pt.12", 6, "itaewon.jpg", "https://open.spotify.com/album/3Y0g1Cgg3DPMvNoaOgfeT7", 2020),
        ("HWARANG, Pt.2 (Music from the original TV Series)", 2, "hwarang.jpg", "https://open.spotify.com/album/0sL76PXbgRh97MTzadqEMa", 2016),
        ("The Astronaut", 2, "astro.jpg", "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV/discography/all", 2022),
        ("Super Tuna", 2, "supertuna.jpg", "https://open.spotify.com/artist/5vV3bFXnN6D6N3Nj4xRvaV/discography/all", 2021),
        ("Jirisan (Original Television Soundtrack) Pt.4", 2, "jirisan.jpg", "https://open.spotify.com/album/145FYiluHlYCPGO2MOLhU4", 2021),
        ("Abyss", 2, "abyss.jpg", "https://open.spotify.com/album/0vyG4FyBIHURVJjQT0RDvG", 2020),
        ("Tonight", 2, "tonight.jpg", "https://open.spotify.com/album/4CwQ2ExjGm91njJC8dWWiv", 2019),
        ("Change", 1, "change.jpg", "https://open.spotify.com/album/1XNlRfQuMTW3IF0z0dUZgq", 2017);
        
SET FOREIGN_KEY_CHECKS=1;
COMMIT;