window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {
        console.log(properties)
        window.isWPEReady = true

        if (properties.size) {
            window.canvasSizePercentage = properties.size.value
        }
        if (properties.canvasmargin) {
            window.getCanvasMargin = () => { return properties.canvasmargin.value }
        }
        if (properties.divisions) {
            window.divisions = () => { return properties.divisions.value }
        }
        if (properties.randomx) {
            window.getRandomX = () => { return properties.randomx.value }
        }
        if (properties.randomy) {
            window.getRandomY = () => { return properties.randomy.value }
        }
        if (properties.animationvelocityx) {
            window.getAnimationVelocityX = () => { return map(properties.animationvelocityx.value, 0, 1, 0, 0.1) }
        }
        if (properties.animationvelocityy) {
            window.getAnimationVelocityY = () => { return map(properties.animationvelocityy.value, 0, 1, 0, 0.1) }
        }
        if (properties.colorvelocity) {
            window.getColorVelocity = () => { return map(properties.colorvelocity.value, 0, 1, 0, 0.2) }
        }
        if (properties.color1) {
            if(/^#(?:[0-9a-fA-F]{6})$/.test(properties.color1.value) == false) return
            window.getColor1 = () => { return properties.color1.value }
        }
        if (properties.color2) {
            if(/^#(?:[0-9a-fA-F]{6})$/.test(properties.color2.value) == false) return
            window.getColor2 = () => { return properties.color2.value }
        }
        if (properties.canvasmargincolor) {
            if(/^#(?:[0-9a-fA-F]{6})$/.test(properties.canvasmargincolor.value) == false) return
            window.getCanvasMarginColor = () => { return properties.canvasmargincolor.value }
        }
        if (properties.backgroundcolor) {
            window.getBackgroundColor = () => {return 'rgb(' + properties.backgroundcolor.value.split(' ').map(function (c) {return Math.ceil(c * 255)}) + ')';}
        }
        if (properties.divisionborderwidth) {
            window.getSquareMargin = () => { return properties.divisionborderwidth.value }
        }
        if (properties.hasshadow) {
            window.getHasShadow = () => { return properties.hasshadow.value }
        }
        if (properties.shadowcolor) {
            window.getShadowColor = () => {return 'rgb(' + properties.shadowcolor.value.split(' ').map(function (c) {return Math.ceil(c * 255)}) + ')';}
        }
    },
};