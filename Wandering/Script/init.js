// Inits everything.
// Data is hardcoded in, in lieu of a better method.
var path = ["Map of Wandering.png","map_wandering.png"];
var testLibrary = new ImageLibrary(path);

// Main function. 
drawCanvas(testLibrary.getImage(0));

setInterval(updateCanvas(), 30);