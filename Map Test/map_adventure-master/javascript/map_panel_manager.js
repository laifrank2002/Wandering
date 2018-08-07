var map_panel_manager = {

    init: function() {
        this.map = new Map();
    },

    display_map: function(map) {
        //draws the map
        map_panel.innerHTML = "";
        context.clearRect(0, 0, map_canvas.width, map_canvas.height);

        var rows = map.stringify().split('\n');

        var rowsleft = 0;
        
        while (rowsleft < rows.length) {
            var line = document.createElement("P");
            var tiles = rows[rowsleft].split("");
            var tile;
            
            while (tiles.length > 0) {
                tile = tiles.shift(); //remove a tile
                
                //style landmarks
                if (this.is_landmark(tile)) {
					
                    line.innerHTML += "<span style='color:black; font-weight: bold;'>" + tile + "</span>";
					context.drawImage(IMAGE_TILES[get_key_by_value(MAP_TILES,tile)],(map.width - tiles.length - 1)*TILE_SIZE,(rowsleft)*TILE_SIZE,TILE_SIZE,TILE_SIZE);
                } else {
                    line.innerHTML += tile;
					context.drawImage(IMAGE_TILES[get_key_by_value(MAP_TILES,tile)],(map.width - tiles.length - 1)*TILE_SIZE,(rowsleft)*TILE_SIZE,TILE_SIZE,TILE_SIZE);
                }
            }
            
            var p_att = document.createAttribute("style");
            p_att.value = "margin: 0px; display: block;";
            line.setAttributeNode(p_att);
            
            map_panel.appendChild(line);
            rowsleft = rowsleft + 1;
        }
    },
    
    is_landmark: function(tile) {
        if (tile == MAP_TILES.PLAYER) {
            return true;
        }
        
        if (tile == MAP_TILES.MYSTERY) {
            return true;
        }
        
        if (tile == MAP_TILES.MARSH) {
            return false;
        }
        
        return /\w/.test(tile);
    },
}

//alias
var MPM = map_panel_manager;
