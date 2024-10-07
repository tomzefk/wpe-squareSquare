window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        console.log(properties)
        window.isWPEReady = true

        if (properties.size) {
            window.canvasSizePercentage = properties.size.value
        }
        if (properties.canvasmargin) {
            window.getCanvasMargin = () => {return properties.canvasmargin.value}
        }
        if (properties.divisions) {
            window.divisions = () => {return properties.divisions.value}
        }
        if (properties.randomx) {
            window.getRandomX = () => {return properties.randomx.value}
        }
        if (properties.randomy) {
            window.getRandomY = () => {return properties.randomy.value}
        }
        if (properties.animationvelocityx) {
            window.getAnimationVelocityX = () => {return properties.animationvelocityx.value}
        }
        if (properties.animationvelocityy) {
            window.getAnimationVelocityY = () => {return properties.animationvelocityy.value}
        }
        if (properties.colorvelocity) {
            window.getColorVelocity = () => {return properties.colorvelocity.value}
        }
        if (properties.color1) {
            window.getColor1 = () => {return properties.color1.value}
        }
        if (properties.color2) {
            window.getColor2 = () => {return properties.color2.value}
        }
        if (properties.canvasmargincolor) {
            window.getCanvasMarginColor = () => {return properties.canvasmargincolor.value}
        }
        if (properties.divisionborderwidth) {
            window.getSquareMargin = () => {return properties.divisionborderwidth.value}
        }
        if (properties.hasshadow) {
            window.getHasShadow = () => {return properties.hasshadow.value}
        }
    },
};