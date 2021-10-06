const Room = require("./room");

const Decorator = function(){
    this.stock = [];
    this.emptyStock = [];
};


Decorator.prototype.amountOfStock = function(){
    return this.stock.length;
}


Decorator.prototype.addStock = function(paint){
    this.stock.push(paint);
}


Decorator.prototype.calculateTotalStock = function(){
    let totalStock = 0;
    for (paint of this.stock){
        totalStock += paint.litres;
    }
    return totalStock;
}


Decorator.prototype.calculateEnoughPaint = function(roomArea){
    let totalStock = this.calculateTotalStock;
    if (totalStock >= roomArea){
        return true
    } else {
        return false
    }
}


Decorator.prototype.decoratorPaintsRoom = function(room){
    let enoughPaint = this.calculateEnoughPaint(room);
    if (enoughPaint === true && room.painted === false){
        room.paintRoom()
    } else {
        return 'This room has already been painted..'
    }
}


// Extensions..

Decorator.prototype.decreaseStock = function(room){
    let totalStock = this.calculateTotalStock();
    if (room.painted === true){
        totalStock -= room.area
        return totalStock
    } else {
        return 'The room has not been painted yet..'
    }
}


Decorator.prototype.removePaintByName = function(paint){
    const indexOfPaint = this.stock.indexOf(paint);
    this.stock.splice(indexOfPaint, 1);
}


Decorator.prototype.sortEmptyStock = function(){
    for (paint of this.stock){
        if (paint.empty === true){
            this.emptyStock.push(paint);
    } else {
        return 'There are no empty paint cans..'
    }
}}



Decorator.prototype.removeAllEmptyStock = function(){
    this.emptyStock.splice(0, this.emptyStock.length);
}


module.exports = Decorator;

