// 5)	Write a function that will take the number of petals of each flower and return true if      
//                   they are in love and false if they aren't.

function lovePetals(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1;
    }
    console.log(lovePetals(1, 4)); // true
    // console.log(lovePetals(2, 4));
    
    
