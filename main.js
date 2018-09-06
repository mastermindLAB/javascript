var name = "bottle";
var count = 99;

while (count > 0){
    console.log (count+ " numbers of " + name + " in the store ");
    console.log ( "take one done from " + count + " and pass it arround");
    count = count - 1;
    if (count == 0){
        console.log("close the business stock "+count);
        
}
    else {
        console.log(name+ " left " +count);
    }
    if (count <= 5){
        alert(count+" bottle left need to stock up soon");
        console.log( count+" bottle left need to stock up soon")
    }
   //new change
}