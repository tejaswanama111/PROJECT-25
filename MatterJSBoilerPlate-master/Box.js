class Box {
    constructor( x,y,width, height){
    
        var options = {
            
           isStatic : true
    
        }
    
        this.body = Bodies.rectangle(x,y,width,height ,options);
        this.width = width ;
        this.height = height;
        this.image = loadImage("sprites/dustbin.png");
        World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;
       
        fill(255);
        imageMode(CENTER);
        image(this.image, 600, 560, 200, this.height);
       
    }
    
    }
