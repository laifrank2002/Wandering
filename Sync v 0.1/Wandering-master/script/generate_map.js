//WARNING! USES A S*** LOAD OF IIFES! PLEASE REFER TO THE WIKI IF YOU DO NOT UNDERSTAND THEM!
//WARNING! VERY RESOURCE INTENSIVE! PLEASE HELP ME MAKE THIS LIGHTER ON MY COMPUTER! THANKS IN ADVANCE!

function generate_natural_map(width, height) {
    if (isNaN(width)) {
        width = 75; //default value for width is 75
    }

    if (isNaN(height)) {
        height = 75; //default value for height is 75
    }

    Engine.log("generating a " + width + " by " + height + " natural map...");

    //create a string
    var string = "";
    for (var i = 0; i < height * width; i = i + 1) {
        string = string + MAP_TILES.PLAINS; //for the natural map, I start with all plains. It's a plain map, after all (puns!)
    }

    var map = new Map(string, width, height); //make the map!


    var lower_limit = Math.round((width + height) / 12);
    var upper_limit = Math.round((width + height) / 8);

    //manipulate the map
    var num_of_areas = random_number(lower_limit, upper_limit); //between 10 and 20 types of terrain

    while (num_of_areas > -1) {

        (function() {
            var radius = random_number(5, 15);
            var center = {
                x: random_number(0, width),
                y: random_number(0, height),
            };
            var terrain_type = (function() {
                switch (random_number(0, 4)) {
                    case 0:
                        return MAP_TILES.FOREST;
                        break;
                    case 1:
                        return MAP_TILES.MARSH;
                        break;
                    case 2:
                        return MAP_TILES.MOUNTAINS;
                        break;
                    case 3:
                        return MAP_TILES.WATER;
                        break;
                    default:
                        //hopefully this won't execute
                        Engine.log("something went wrong when picking a terrain type.");
                }
            })(); //an IIFE in an IIFE: IIFE-ception!

            //start filling it in
            map.set_tile(center.x, center.y, terrain_type); //set the center to the terrain type

            var top_left_x = Math.max(0, (center.x - radius));
            var top_left_y = Math.max(0, (center.y - radius));

            var bottom_right_x = Math.min(width,  (center.x + radius));
            var bottom_right_y = Math.min(height, (center.y + radius));

            //Engine.log("setting top left at (" + top_left_x + ", " + top_left_y + "), and bottom right at (" + bottom_right_x + ", " + bottom_right_y + "). " + "terrain type: '" + terrain_type + "'.");

            var current_x = top_left_x;
            var current_y = top_left_y;

            //needs debugging
            while (current_y < bottom_right_y) {
                while (current_x < bottom_right_x) {
                    if (map.get_euclidean_distance(current_x, current_y, center.x, center.y) < radius) {
                        //Engine.log("setting (" + current_x + ", " + current_y + ") as '" + terrain_type + "'.");
                        map.set_tile(current_x, current_y, terrain_type);
                    }

                    current_x = current_x + 1;
                }

                current_x = top_left_x; //reset x. I didn't do this before; I'm a f***ing idiot!

                current_y = current_y + 1;
            }

            //Engine.log("finished generating area with terrain type '" + terrain_type + "'.");
        })(); //I'm using an IIFE here just to spite you, ha ha

        num_of_areas = num_of_areas - 1; //one area down!
    }

    (function() {  //generate a river
        var point = { //start on the left side of the map
            x: 0,
            y: random_number(5, height - 5),
        }

        var next_points = [];

        while (point.x < width && point.y > -1 && point.y < height) {
            //Engine.log("setting (" + point.x + ", " + point.y + ") as RIVER.");
            map.set_tile(point.x, point.y, MAP_TILES.WATER);

            new_points = search_points(point.x, point.y, width, height).filter(function(new_point) {
                if (new_point.x > point.x) {
                    return true;
                } else {
                    return false;
                }
            });

            //pick a point either to the right, top right, or bottom right
            point = new_points[(Math.floor(Math.random() * 3))];
        }
    })();

    return map;
}


//HELPER FUNCTIONS: BLAME THESE GUYS WHEN SOMETHING GOES WRONG
//for generating random number
function random_number(start, end) {
    var multiplier = Math.abs((start - end));
    var adder = Math.min(start, end);

    return Math.floor(Math.random() * multiplier + adder);
}

//returns an array of points that are within the map, intended as a failsafe. right now, it's not used
//but it's a great example for anything like it
function search_points(x_coord, y_coord, width, height) {
    var points = [
        { //top left
            x: x_coord - 1,
            y: y_coord - 1,
        },

        { //above the point
            x: x_coord,
            y: y_coord - 1,
        },

        { //top right
            x: x_coord + 1,
            y: y_coord - 1,
        },

        { //left
            x: x_coord - 1,
            y: y_coord,
        },

        { //the point
            x: x_coord,
            y: y_coord,
        },

        { //right
            x: x_coord + 1,
            y: y_coord,
        },

        { //bottom left
            x: x_coord - 1,
            y: y_coord + 1,
        },

        { //below the point
            x: x_coord,
            y: y_coord + 1,
        },

        { //bottom right
            x: x_coord + 1,
            y: y_coord + 1,
        },
    ];

    return points.filter(function (point) {
        if (point.x < 0 || point.y < 0) {
            return false;
        }

        if (point.x > width || point.y > height) {
            return false;
        }

        return true;
    });
}