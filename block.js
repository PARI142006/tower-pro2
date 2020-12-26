class Block{
    constructor(x, y, width, height) {
        var options = {
            
            
            'friction':9
        }
            
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;        
      
        World.add(world, this.body);
      }
      display(){
       
        push();
       if(this.body.speed>3){
        display()
       }
       else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        translate(this.body.position.x, this.body.position.y);
        stroke (0,0,0)
        strokeWeight(2)
        fill (245,4,107)
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
    }}