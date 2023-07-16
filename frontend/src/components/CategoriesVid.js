
function CategoriesVid(){
    // call the list of categories// tags
    const tags = [
       {"tagID": 1, "tag": "26Booty Shorts"},
       {"tagID": 2, "tag": "27Cotton Balls"},
       {"tagID": 3, "tag": "28Curlers"},
       {"tagID": 4, "tag": "29Unicorn"},
       {"tagID": 5, "tag": "30Garage"},
       {"tagID": 6, "tag": "31Knee Socks"},
       {"tagID": 7, "tag": "32Mustache"},
       {"tagID": 8, "tag": "33Shoe Horn"},
       {"tagID": 9, "tag": "34Squirrel Feeding Station"},
       {"tagID": 10, "tag": "35Thermos"},
       {"tagID": 11, "tag": "36Velcro"},
       {"tagID": 12, "tag": "37A Tackle Box"},
       {"tagID": 13, "tag": "38Crazy Straw"},
       {"tagID": 14, "tag": "39Curly Shoelaces"},
       {"tagID": 15, "tag": "40Hamster Ball"},
       {"tagID": 16, "tag": "41Horse Head Mask"},
       {"tagID": 17, "tag": "42Multi Tool"},
       {"tagID": 18, "tag": "43Nintendo Switch"},
       {"tagID": 19, "tag": "44Pulse Oximeter"},
       {"tagID": 20, "tag": "45Shoe"},
       {"tagID": 21, "tag": "46Stress Ball"},
       {"tagID": 22, "tag": "47Stuffed Dog"},
       {"tagID": 23, "tag": "48Tent"},
       {"tagID": 24, "tag": "49Trunk"},
       {"tagID": 25, "tag": "50Salt Lamp"}]
    
    return(
    <div className="categoriesModal">
        {tags.map((tag) => 
            <ol className="listtags">
                {/* <li value={tag.tagID}>{tag.tag}</li> */}
                <a href={"/search/"+tag.tag}><li value={tag.tagID}>{tag.tag}</li></a>
            </ol>)}
        
    </div>
    );
  }
  
  
  export default CategoriesVid;