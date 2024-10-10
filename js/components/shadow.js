function drawShadow(c) {
  
    push()
      translate(c.pos.x-getCanvasMargin(), (c.pos.y+getCanvasMargin())+c.size)
      rotate(-45 * PI/180)
      
      fill(window.getShadowColor())
      noStroke()
      rect(
        0,
        0,
        (c.size+(getCanvasMargin()*2)) * Math.SQRT2,
        dist((c.pos.x+(c.size/2)), (c.pos.y+(c.size/2)), width, height),
      )
    pop()
    
  }