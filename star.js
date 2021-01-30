class Star {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      star.body = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
      star.width = width;
      star.height = height;
      
      World.add(world, star.body);
    }
    display(){
      var pos =star.body.position;
      var angle = star.body.angle;
      push ();
      translate (pos.x,pos.y);
      rotate (angle);
  
      rectMode(CENTER);
      fill(255);
      rect(0, 0, star.width, star.height);
      pop();
    }
  };