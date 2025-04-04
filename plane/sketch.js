let airfields = [];
let currentPlane =0 ;

function setup () {
createCanvas(500,500)
background(90,255,60)
angleMode(DEGREES)
//rectMode(CENTER)


airfields.push(new Airfield({numCrafts:12}))
// airfields.push(new Airfield({numPlanes:15, airFieldWidth:150, airFieldHeight:150, airFieldPosX:350, airFieldPosY:350}))
//noLoop()
}

function draw() {
    background(90,255,60)
   

    for (let i=0; i<airfields.length; i++){
        // render our airfield
    airfields[i].renderAirfield();
    // render our planes
    airfields[i].renderCrafts();
    // move our planes
    airfields[i].moveCrafts();
    // Checks to see that our plane stays inside of our airfield width/height
    airfields[i].checkPos();  
    // checks the distance between 2 planes.
    airfields[i].checkDist();  
}


}

function keyPressed() {
    
    switch(key){
        case "0": currentPlane = 0;break;
        case "1": currentPlane = 1;break;
        case "2": currentPlane = 2;break;
        case "3": currentPlane = 3;break;
        case "4": currentPlane = 4;break;
        case "5": currentPlane = 5;break;
        case "6": currentPlane = 6;break;
        case "7": currentPlane = 7;break;
        case "8": currentPlane = 8;break;
        case "9": currentPlane = 9;break;
    }
    console.log(currentPlane)
    
    if(key==="w"){
     airfields[0].crafts[currentPlane].increaseSpeed()
    }

    if(key==="x"){
        airfields[0].crafts[currentPlane].decreaseSpeed()
       }

       if(key==="d"){
        airfields[0].crafts[currentPlane].turnRight()
       }

       if(key==="a"){
        airfields[0].crafts[currentPlane].turnLeft()
       }
  }