class Craft {
    // make the plane rules
    constructor(obj) {

        this.pos = createVector(
            obj.posX ?? random(0,300),
            obj.posY ?? random(0,300)
        )
        
        this.speed = obj.speed ?? random(0.2,2);
        this.angle = obj.angle ?? random(0,360)
        this.futureAngle = this.angle;
        
        this.apWidth = obj.apWidth ?? 15;
        this.apHeight = obj.apHeight ?? 20;
        
        this.alert = false;

        this.vel = createVector(
            this.speed * cos(this.angle),
            this.speed * sin(this.angle)
        )
    }

    updateVel(){

        this.vel = createVector(
            this.speed * cos(this.angle),
            this.speed * sin(this.angle)
        )
    }

    increaseSpeed(){
       this.speed += 0.5;
       this.updateVel();
    }

    decreaseSpeed(){
        this.speed -= 0.5;
        this.updateVel();
    }

    turnRight(){
        this.futureAngle += 15;
    }

    turnLeft(){
        this.futureAngle -= 15;
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
            ellipse(0,0,this.apWidth)

                if(this.alert){
                noFill()
                stroke(0,0,0)
                strokeWeight(2)
                ellipse(this.apHeight*0.4,0,this.apHeight*1.3)
                }

        pop()
    }

    move(){
        if(this.angle < this.futureAngle){
            this.angle += 0.5
            this.updateVel();
        } else {
            this.angle -= 0.5
            this.updateVel();
        }
        this.pos.x = this.pos.x + this.vel.x;
        this.pos.y = this.pos.y + this.vel.y;
    }
    
}

