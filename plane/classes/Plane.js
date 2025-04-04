class Plane extends Craft {
    // make the plane rules
    constructor(obj) {

       super(obj)

       this.tail =5;

    }

    decreaseSpeed(){
        this.speed -= 0.5;
        if(this.speed<0.3){ this.speed=0.3}
        this.updateVel();
    }

 

    // actually draw the plane
    render(id){
        push()
            translate(this.pos.x, this.pos.y)
    
            //let angle = atan2(this.velY, this.velX);

            fill(0)
            noStroke()
            textSize(12)
            text(id,10,-15);
            rotate(this.angle)
            strokeWeight(1)


            // plane shape
            fill(255)
            beginShape()
            vertex(0,0)
            vertex(-this.tail,this.apHeight/2)
            vertex(this.apWidth - this.tail, 0)
            vertex(-this.tail,-this.apHeight/2)
            endShape(CLOSE)

                if(this.alert){
                noFill()
                stroke(0,0,0)
                strokeWeight(2)
                ellipse(this.apHeight*0.4,0,this.apHeight*1.3)
                }

        pop()
    }

  
    
}

