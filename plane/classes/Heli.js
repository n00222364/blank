class Heli extends Craft {
    // make the plane rules
    constructor(obj) {

       super(obj)
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
            rect(0,0,this.apWidth)

                if(this.alert){
                noFill()
                stroke(0,0,0)
                strokeWeight(2)
                ellipse(this.apHeight*0.4,0,this.apHeight*1.3)
                }

        pop()
    }

  
    
}

