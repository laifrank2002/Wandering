// Global init starting points.
var canvas = document.getElementById("map");
var context = canvas.getContext("2d");
// Data is hardcoded in, in lieu of a better method.
var mapPaths = ["Map of Wandering.png","map_wandering.png"];
var tilePaths = ["Images\\Tiles\\leaves.png"
	,"Images\\Tiles\\tile_city_base.png"
	,"Images\\Tiles\\tile_grass_base.png"
	,"Images\\Tiles\\tile_stump_base.png"];
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
			this.objectImage[imageIndex].width = this.objectImage[imageIndex].naturalWidth;
			this.objectImage[imageIndex].height = this.objectImage[imageIndex].naturalHeight;
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
function updateCanvas()
{
	context.drawImage(mapLibrary.getImage(0),0,0,640,640);
	// Map rendering.
	let MAPWIDTH = 40;
	let MAPHEIGHT = 40;
	let TILE_SIZE = 16;
	for (let index = 0; index < MAPWIDTH * MAPHEIGHT; index ++)
	{
		let x = (index % MAPWIDTH) * TILE_SIZE;
		let y = (Math.floor(index/MAPWIDTH)) * TILE_SIZE;
		
		context.drawImage(tileLibrary.getImage(0),0,0,16,16,x,y,TILE_SIZE,TILE_SIZE);
		console.log(x + "," + y);
	}
} // end of updateCanvas()