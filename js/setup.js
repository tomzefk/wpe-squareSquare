function setup() {
    let cxCanvas = document.querySelector('div.pane:has(input[value="cx"])')
        ? document.querySelector('div.pane:has(input[value="cx"])')
        : document.evaluate("//div[text()='cx']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue?.parentElement.parentElement.parentElement.children[1];

    
    createCanvas(
        cxCanvas ? cxCanvas.clientWidth : window.innerWidth,
        cxCanvas ? cxCanvas.clientHeight - 32 : window.innerHeight
    )
    pixelDensity(window.devicePixelRatio)
    colorMode('HSL')
}