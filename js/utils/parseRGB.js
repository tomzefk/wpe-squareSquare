function parseRGB(rgb) {
    let parse = rgb.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (parse) {
        return [parse[1], parse[2], parse[3]];
    }
}