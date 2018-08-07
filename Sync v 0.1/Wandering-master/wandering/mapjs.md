# map.js, explained #

This file explains how the map.js file works.


## Properties ##

`map_array` -- the map, as an array

`width` -- the width of the map

`height` -- the height of the map

Example: suppose you have a map, that looks like this:

`a b c`

`d e f`

`g h i`

`j k l`

Then the width and height relate to it in this way:

`___0 1 2  `

`_+------> ` width

`0| a b c `

`1| d e f `

`2| g h i `

`3| j k l`

`_V `

height

This map has a width of 3 and a height of 4.

If you want to access the tile, for example, at (1, 2) (the "h"), simply
use the formula 1 + 2 * width.