function drawShadow(c) {
  
    push()
      translate(c.pos.x-getCanvasMargin(), (c.pos.y+getCanvasMargin())+c.size)
      rotate(-45 * PI/180)
      
      fill('#000000dd')
      noStroke()
      rect(
        0,
        0,
        (c.size+(getCanvasMargin()*2)) * Math.SQRT2,
        c.size*10,
      )
    pop()
    
  }