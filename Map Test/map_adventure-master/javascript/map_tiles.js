var TILE_SIZE = 16;

var MAP_TILES = { //subject to change!
    BLANK: " ",
    PLAYER: "§",
    FARM: "A",
    OUTPOST: "#",
    PATH: "_",
    BRIDGE: "-",

    ROCK: ":",
    ORE: "O",
    MINE_ENTRANCE: "A",

    SPECIAL: "X", //to catch the player's attention. IMMEDIATELY!!!!!!!
    MYSTERY: "?", //in case you need it

    //various types of terrain
    FOREST: ";",
    MARSH: "m", //fill that in later
    WATER: "~",
    MOUNTAINS: "^",
    MOUNTAINS_LEFT: "/",
    MOUNTAINS_RIGHT: "\\", //I needed an escape sequence
    PLAINS: ".",

    //city and town tiles
    STREET: "#",
    SHOP: "S",
    HOUSE: "H",
    TRANSPORT_STATION: "T",
    CENTRAL_HALL: "C",
    CHURCH: "U", //soething will happen here
    CITY: "M", //city on the big map
    TOWN: "N", //town on the big map
};

// image tiles
var IMAGE_TILES = {
    PLAYER: create_image(TILE_SIZE,TILE_SIZE,"images/leaves.png"),
    FARM: create_image(TILE_SIZE,TILE_SIZE,"images/tile_pine1.png"),

	ROCK: create_image(TILE_SIZE,TILE_SIZE,"images/tile_moutainT.png"),
	ORE: create_image(TILE_SIZE,TILE_SIZE,"images/tile_city_base.png"),
	
	PLAINS: create_image(TILE_SIZE,TILE_SIZE,"images/tile_grass_base.png"),
};

function create_image(width,height,source)
{
	var image_element = new Image(width,height);
	image_element.src = source;
	return image_element;
}