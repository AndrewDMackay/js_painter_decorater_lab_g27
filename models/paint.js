
const Paint = function(litres){
    this.litres = litres;
    this.empty = false;
};


Paint.prototype.emptyPaint = function(paint){
    paint.empty = true;
}


module.exports = Paint;

