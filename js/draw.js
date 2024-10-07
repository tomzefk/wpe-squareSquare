function draw() {
    background("#f1f1f1")

    if (window.isWPEReady == false) return

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


            let currentColor = hexToHsl(window.getColor1())
            let nextColor = hexToHsl(window.getColor2())

            let minHue = Math.min(currentColor.h, nextColor.h)
            let maxHue = Math.max(currentColor.h, nextColor.h)

            let minSat = Math.min(currentColor.s, nextColor.s)
            let maxSat = Math.max(currentColor.s, nextColor.s)

            let minLight = Math.min(currentColor.l, nextColor.l)
            let maxLight = Math.max(currentColor.l, nextColor.l)


            let colorGradH = constrain(
                lerp
                    (minHue,
                        maxHue,
                        (y + x) / (divisions() * 2)
                    ),
                minHue,
                maxHue
            )

            let colorGradS = constrain(
                lerp
                    (minSat,
                        maxSat,
                        (y + x) / (divisions() * 2)
                    ),
                minSat,
                maxSat
            )

            let colorGradL = constrain(
                lerp
                    (minLight,
                        maxLight,
                        (y + x) / (divisions() * 2)
                    ),
                minLight,
                maxLight
            )


            push();
                stroke('#000')
                getSquareMargin() != 0
                    ? strokeWeight(getSquareMargin())
                    : noStroke()
                fill(hslToHex(colorGradH + (f * 64), colorGradS, colorGradL))
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