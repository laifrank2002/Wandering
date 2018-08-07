function Map(string, width, height) {

    string = string.split("\n").join(""); //removes line breaks
    
    if (string.length == width * height) {
        this.map_array = string.split("");
        this.width = width;
        this.height = height;
    } else {
        throw new Error("map size doesn't match the string length");
    }

    this.special_tiles = []; //for special tiles

    for (var i = 0; i < width * height; i = i + 1) {
        this.special_tiles[i] = null; //start out with no special tiles, for now.
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
};

//give it a pair of co-ordinates, and it'll give you where to find that tile in the array
Map.prototype.get_tile_pos = function(width, height) {
    return width + height * this.width;
};

//returns a tile from the map
Map.prototype.get_tile = function(width, height) {
    var tile_pos = this.get_tile_pos(width, height);
    return this.map_array[tile_pos];
};

//sets a tile in the map. permanently.
Map.prototype.set_tile = function(width, height, new_tile) {
    var tile_pos = this.get_tile_pos(width, height);
    this.map_array[tile_pos] = new_tile;
};

Map.prototype.set_special_tile = function(width, height, new_special_tile) {
    var special_tile_pos = this.get_tile_pos(width, height);
    this.special_tiles[special_tile_pos] = new_special_tile;
};

Map.prototype.get_special_tile = function(width, height) {
    var special_tile_pos = this.get_tile_pos(width, height);
    return this.special_tiles[special_tile_pos];
};

Map.prototype.remove_special_tile = function(width, height) {
    var special_tile_pos = this.get_tile_pos(width, height);
    this.special_tiles[special_tile_pos] = null; //set it to null
};


//the special tile class, as a template for special tiles
function Special_tile(name, action) {
    this.name = name;
    
    if (action == undefined) {
        this.action = this.no_action;
    }
}

Special_tile.prototype.no_action = function() {
    //do nothing
};