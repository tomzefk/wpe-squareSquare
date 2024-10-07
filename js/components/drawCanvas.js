function drawCanvas(c) {

    push()
      fill('transparent')
      stroke(getCanvasMarginColor())
      getCanvasMargin() != 0
        ? strokeWeight(getCanvasMargin())
        : noStroke()
      rect(
        c.pos.x - getCanvasMargin() / 2,
        c.pos.y - getCanvasMargin() / 2,
        c.size + getCanvasMargin(),
        c.size + getCanvasMargin()
      )
    pop()
    
  };