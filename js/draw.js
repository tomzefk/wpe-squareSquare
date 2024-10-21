function draw() {
    if (window.isWPEReady == false) return

    background(window.getBackgroundColor())

    let canvas = mainCanvas()
    window.getHasShadow() && drawShadow(canvas)

    let fpre = map(
        sin(
            frameCount * window.getAnimationVelocityX() +
            dist(canvas.pos.x, canvas.pos.y, canvas.pos.x + canvas.size * window.getRandomX(), canvas.pos.y + canvas.size)
        ),
        -1,
        1,
        0.5,
        1.25
    );
    let fpreY = map(
        sin(
            frameCount * window.getAnimationVelocityY() +
            dist(canvas.pos.x, canvas.pos.y, canvas.pos.x + canvas.size * window.getRandomY(), canvas.pos.y + canvas.size)
        ),
        -1,
        1,
        0.5,
        1.25
    );


    let f = map(
        sin(
            frameCount * window.getColorVelocity() +
            dist(canvas.pos.x, canvas.pos.y, canvas.pos.x + canvas.size, canvas.pos.y + canvas.size)
        ),
        -1,
        1,
        0,
        1
    );

    let spaceLeftY = window.getUsableSpaceY();

    for (let y = 0; y < divisions(); y++) {
        let spaceLeftX = window.getUsableSpaceX();

        var heightY = y == divisions() - 1
            ? spaceLeftY
            : (spaceLeftY / (divisions() - y) * fpreY)

        for (let x = 0; x < divisions(); x++) {
            var widthX =
                x == divisions() - 1
                    ? spaceLeftX
                    : (spaceLeftX / (divisions() - x) * fpre)

            
            let currentColor = parseRGB(window.getColor1())
            let nextColor = parseRGB(window.getColor2())

            let colorGradR = lerp(currentColor[0], nextColor[0], map(y + x, 0, (divisions() * 2) - 2, 0, 1))
            let colorGradG = lerp(currentColor[1], nextColor[1], map(y + x, 0, (divisions() * 2) - 2, 0, 1))
            let colorGradB = lerp(currentColor[2], nextColor[2], map(y + x, 0, (divisions() * 2) - 2, 0, 1))            

            push();
            stroke('#000')
            getSquareMargin() != 0
                ? strokeWeight(getSquareMargin())
                : noStroke()
            fill(`rgb(${colorGradR + (f*64)}, ${colorGradG + (f*64)}, ${colorGradB + (f*64)})`)
            rect(
                canvas.pos.x + (window.getUsableSpaceX() - spaceLeftX),
                canvas.pos.y + (window.getUsableSpaceY() - spaceLeftY),
                widthX + 0,
                heightY + 0,
            );
            pop();


            spaceLeftX = spaceLeftX - widthX;
        }
        spaceLeftY = spaceLeftY - heightY;
    }

    drawCanvas(canvas)

}