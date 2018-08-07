function generate_map(width, height) {
    if (isNaN(width)) {
        width = 75; //default value for width is 75
    }

    if (isNaN(height)) {
        height = 75; //default value for height is 75
    }

    //create a string
    var string = "";
    for (var i = 0; i < height * width; i = i + 1) {
        string = string + (Math.floor(Math.random() * 10));
    }

    var map = new Map(string, width, height);

    return map;
}