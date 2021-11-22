function random_bg_color() {
    var originalR = Math.floor(Math.random() * 256);
    var originalG = Math.floor(Math.random() * 256);
    var originalB = Math.floor(Math.random() * 256);
    var red=originalR+(255-originalR)*5/8
    var green=originalG+(255-originalG)*5/8
    var blue=originalB+(255-originalB)*5/8
    var bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
    
}

random_bg_color();