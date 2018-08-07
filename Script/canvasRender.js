// Global init starting points.
var canvas = document.getElementById("map");
var context = canvas.getContext("2d");
// Data is hardcoded in, in lieu of a better method.
var mapPaths = ["Map of Wandering.png","map_wandering.png"];
var tilePaths = ["Images\\Tiles\\leaves.png"
	,"Images\\Tiles\\tile_city_base.png"
	,"Images\\Tiles\\tile_grass_base.png"
	,"Images\\Tiles\\tile_stump_base.png"
	,"Images\\Tiles\\tile_riverB.png"
	,"Images\\Tiles\\tile_riverL.png"
	,"Images\\Tiles\\tile_riverR.png"
	,"Images\\Tiles\\tile_riverT.png"];
var mapLibrary = new ImageLibrary(mapPaths);
var tileLibrary = new ImageLibrary(tilePaths);

// Image library.
// Paths, an array of file paths.
function ImageLibrary(paths)
{
	if (paths !== null)
	{
		this.objectImage = [];
		
		for (var imageIndex = 0; imageIndex < paths.length; imageIndex++)
		{
			this.objectImage[imageIndex] = new Image();
			this.objectImage[imageIndex].src = paths[imageIndex];
		} // end for
	} // end if
	
	// Returns the image at some index.
	this.getImage = function(index)
		{
			return this.objectImage[index];
		};
} // end of imageLibrary(paths)


// Draws something on the canvas from the preloaded image library.
function drawCanvas(objectImage)
{
	context.drawImage(objectImage,0,0);
} // end of drawCanvas(objectImage)

// Updates everything from a map.
var aMap = new Map("aaaaaaaaaaaaaaaaaaaaaaaa-----------bbllbbllbttrrrltrbl-----------~aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
,10,10);
function updateCanvas()
{
	context.drawImage(mapLibrary.getImage(0),0,0,640,640);
	// Map rendering.
	let MAPWIDTH = 10;
	let MAPHEIGHT = 10;
	let TILE_SIZE = 16;
	
	var currentMap = aMap;
	
	
	for (let index = 0; index < MAPWIDTH * MAPHEIGHT; index ++)
	{
		setTimeout(function(){
			
			let x = (index % MAPWIDTH) * TILE_SIZE;
			let y = (Math.floor(index/MAPWIDTH)) * TILE_SIZE;
			let image_index = 0;
			
			switch (currentMap.get_tile(x/TILE_SIZE,y/TILE_SIZE))
			{
				case "-":
					image_index = 3;
					break;
				case "a":
					image_index = 2;
					break;
				case "~":
					image_index = 1;
					break;
				case "b":
					image_index = 4;
					break;
				case "l":
					image_index = 5;
					break;
				case "r":
					image_index = 6;
					break;
				case "t":
					image_index = 7;
					break;
				default:
					image_index = 0;
			}

			context.drawImage(tileLibrary.getImage(image_index),x,y);		
		}, 100);
	}
} // end of updateCanvas()