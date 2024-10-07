function mainCanvas() {
    // Main Canvas
  
    let size = map(window.canvasSizePercentage, 0, 100, 0, Math.min(width, height));
    window.getUsableSpaceX = () => {return size}
    window.getUsableSpaceY = () => {return size}
    
    let pos = {
      x: width / 2 - size / 2,
      y: height / 2 - size / 2,
    }
  
    return {pos, size}
  };