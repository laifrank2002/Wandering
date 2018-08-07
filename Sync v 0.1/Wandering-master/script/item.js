//for documentation, please see the wiki (under Inventory)
function Item(name, type, count) {
    this.name = name;
    this.type = type;
    this.count = count;
}

Item.prototype.add = function(add_item) {
    if (this.name == add_item.name && this.type == add_item.type) {
        this.count = this.count + add_item.count;
    } else {
        throw new Error("item name or item type doesn't match. check them both!");
    }
}

Item.prototype.minus = function(minus_item) {
    
}