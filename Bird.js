class Bird {
  constructor(x,y){
    var options = {
      'restitution':0.8,
            'friction':1,
            'density':10.0
    }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var pos = this.body.position;

    push();

   // translate(pos.x, pos.y);
    imageMode(CENTER);

    if(this.body.velocity.x > 10 && pos.x > 200){
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
    image(this.image, pos.x, pos.y, 50,50 );
    pop();
  }
}
