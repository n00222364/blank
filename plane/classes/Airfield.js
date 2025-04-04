class Airfield {
    constructor(obj){
        this.numCrafts = obj.numCrafts ?? 2;
        this.airFieldWidth = obj.airFieldWidth ?? 300;
        this.airFieldHeight =  obj.airFieldHeight ?? 300;
        this.airFieldPosY =  obj.airFieldPosY ?? 50;
        this.airFieldPosX =  obj.airFieldPosX ?? 50;
        this.crafts = [];
        this.generateCrafts();
    }

    renderAirfield(){
        push()
        translate(this.airFieldPosX,this.airFieldPosY)
        fill(200,0,0)
        rect(0,0,this.airFieldWidth,this.airFieldHeight);
        
        pop()
    }

    renderCrafts(){
        push()
        translate(this.airFieldPosX,this.airFieldPosY)
        fill(255)
        this.crafts.forEach((craft, id) => {
            craft.render(id)
    })
        pop()
    }

    moveCrafts(){
        this.crafts.forEach(craft => {
            craft.move();
        })
    }

    checkPos(){
        this.crafts.forEach(craft => {
            // CheckX
            if (craft.pos.x >= this.airFieldWidth){
                craft.pos.x = 0;
                craft.pos.y = map(craft.pos.y,0,this.airFieldHeight,this.airFieldHeight,0)

            } else if  (craft.pos.x <= 0) {
                craft.pos.x = this.airFieldWidth;
                craft.pos.y = map(craft.pos.y,0,this.airFieldHeight,this.airFieldHeight,0)
            }

                // CheckY
            if (craft.pos.y >= this.airFieldHeight){
                craft.pos.y = 0;
                craft.pos.x = map(craft.pos.x,0,this.airFieldWidth,this.airFieldWidth,0)

            } else if  (craft.pos.y <= 0) {
                craft.pos.y = this.airFieldHeight;
                craft.pos.x = map(craft.pos.x,0,this.airFieldWidth,this.airFieldWidth,1)
            }
        })
    }

    

    generateCrafts(){
        for(let i=0; i<this.numCrafts; i++){
                let num = random(0,1);
                if(num < 0.5){
                    this.crafts.push(
                        new Heli({
                            posX:random(0,this.airFieldWidth), 
                            posY:random(0,this.airFieldHeight)
                        })
                    );
                } else {
                    this.crafts.push(
                        new Plane({
                            posX:random(0,this.airFieldWidth), 
                            posY:random(0,this.airFieldHeight)
                        })
                    );
                }   
        }
    }

    checkDist(){

        this.crafts.forEach(craft => craft.alert = 0)
        let count = 0;
        for (let i=0; i<this.crafts.length; i++){
            for (let j=i+1; j<this.crafts.length; j++){
                
                let craftA = this.crafts[i];
                let craftB = this.crafts[j];
                let dist = sqrt((sq(craftA.pos.x - craftB.pos.x) + (sq(craftA.pos.y - craftB.pos.y))));
                    if(dist<20){
                        craftA.alert = true;
                        craftB.alert = true;
                    }                
                count++
            }
        }
    //    console.log(count)
        
    }
}