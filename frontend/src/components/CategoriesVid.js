
function CategoriesVid(){
    // call the list of categories// tags
    const tags = [
       {"tagID": 1, "tag": "26. Booty Shorts"},
       {"tagID": 2, "tag": "27. Cotton Balls"},
       {"tagID": 3, "tag": "28. Curlers"},
       {"tagID": 4, "tag": "29. Unicorn"},
       {"tagID": 5, "tag": "30. Garage"},
       {"tagID": 6, "tag": "31. Knee Socks"},
       {"tagID": 7, "tag": "32. Mustache"},
       {"tagID": 8, "tag": "33. Shoe Horn"},
       {"tagID": 9, "tag": "34. Squirrel Feeding Station"},
       {"tagID": 10, "tag": "35. Thermos"},
       {"tagID": 11, "tag": "36. Velcro"},
       {"tagID": 12, "tag": "37. A Tackle Box"},
       {"tagID": 13, "tag": "38. Crazy Straw"},
       {"tagID": 14, "tag": "39. Curly Shoelaces"},
       {"tagID": 15, "tag": "40. Hamster Ball"},
       {"tagID": 16, "tag": "41. Horse Head Mask"},
       {"tagID": 17, "tag": "42. Multi Tool"},
       {"tagID": 18, "tag": "43. Nintendo Switch"},
       {"tagID": 19, "tag": "44. Pulse Oximeter"},
       {"tagID": 20, "tag": "45. Shoe"},
       {"tagID": 21, "tag": "46. Stress Ball"},
       {"tagID": 22, "tag": "47. Stuffed Dog"},
       {"tagID": 23, "tag": "48. Tent"},
       {"tagID": 24, "tag": "49. Trunk"},
       {"tagID": 25, "tag": "50. Salt Lamp"}]
    
    return(
    <div className="categoriesModal">
        {tags.map((tag) => 
            <ol className="listtags">
                <li value={tag.tagID}>{tag.tag}</li>
            </ol>)}
        
    </div>
    );
  }
  
  
  export default CategoriesVid;