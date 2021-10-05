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


module.exports = Decorator;


// A decorator should..

// start with an empty paint stock..
// Be able to add a can of paint to paint stock..
// Be able to calculate total litres paint it has in stock..
// Be able to calculate whether is has enough paint to paint a room..
// Be able to paint room if has enough paint in stock..