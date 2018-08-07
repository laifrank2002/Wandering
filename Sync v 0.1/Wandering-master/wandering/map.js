function Map(string, width, height) {

    if (string.length == width * height) {
        this.map_array = string.split("");
        this.width = width;
        this.height = height;
    } else {
        throw new Error("map size doesn't match the string length");
    }
}

//returns a printable string of the map, complete with \n characters
Map.prototype.stringify = function() {
    var stringified_map = "";

    for (var a = 0; a < this.height; a = a + 1) {

        for (var b = 0; b < this.width; b = b + 1) {
            stringified_map = stringified_map + this.get_tile(b, a);
        }

        stringified_map = stringified_map + "\n";
    }

    return stringified_map;
}

//give it a pair of co-ordinates, and it'll give you where to find that tile in the array
Map.prototype.get_tile_pos = function(width, height) {
    return width + height * this.width;
}

//returns a tile from the map
Map.prototype.get_tile = function(width, height) {
    var tile_pos = this.get_tile_pos(width, height);
    return this.map_array[tile_pos];
}

//sets a tile in the map. permanently.
Map.prototype.set_tile = function(width, height, new_tile) {
    var tile_pos = this.get_tile_pos(width, height);
    this.map_array[tile_pos] = new_tile;
}
