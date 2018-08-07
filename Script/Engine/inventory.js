var Inventory = {
    items: [],
    
    add_item: function(item) {
        this.items.push(item);
    },
    
    remove_item: function(item) {
        return this.items.removeElement(item);
    },
    
    set_inventory: function(items) {
        this.items = items;
    },
};

//finds and removes an element of the array, and returns it
Array.prototype.removeElement = function(element) {
    var i = this.indexOf(element);
    
    if (i == -1) {
        //it's all in the error message!
        throw new Error("what you're trying to remove isn't in this array in the first place!");
    }
    
    return this.remove(i); 
};

Array.prototype.remove = function(i) {
    this.swapElements(i, 0);
    return this.shift(); //remove the first element, which is the element to be removed
};

//I'm using pascalCase here, to make it clear that it's now part of Array.prototype,
//something already part of the default Javascript library
Array.prototype.swapElements = function(first, second) {
    var temp = this[first];
    this[first] = this[second];
    this[second] = temp;
    
    //this function has successfully passed my tests. --Clocks-in-a-cooler
};
