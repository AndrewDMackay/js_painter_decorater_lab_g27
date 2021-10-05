const Room = require("./room");

const Decorator = function(){
    this.stock = [];
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


Decorator.prototype.removeAllPaint = function(){
    this.stock.splice(0, this.stock.length);
}


Decorator.prototype.removeEmptyPaint = function(){
    
}




module.exports = Decorator;


// Extensions

// A decorator should..

// should be able to remove empty paint cans from stock..

// Hint..

// We want to avoid removing items from arrays while iterating over them.. 
// This is because iteration uses the index number to access the current item.. 
// And, if you remove an item during one of the iterations, the position of each of the following items will be changed.. 
// And, lead to unexpected results.