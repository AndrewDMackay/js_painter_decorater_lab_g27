

const assert = require('assert');

const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');


// A decorator should..

// start with an empty paint stock..
// Be able to add a can of paint to paint stock..
// Be able to calculate total litres paint it has in stock..
// Be able to calculate whether is has enough paint to paint a room..
// Be able to paint room if has enough paint in stock..


describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10)
        room = new Room(8)
    });

    describe('stock', function(){
        it('should start with no stock', function(){
            const actual = decorator.stock;
            assert.deepStrictEqual(actual, [])});
    });

    it('should be able to add a can of paint to stock', function(){
        decorator.addStock(paint)
        const actual = decorator.amountOfStock();
        assert.strictEqual(actual, 1);
    });

    it('should be able to calculate total litres of paint in stock', function(){
        decorator.addStock(paint)
        const actual = decorator.calculateTotalStock();
        assert.strictEqual(actual, 10);
    });

    it('should be able to calculate if there is enough paint to paint a room', function(){
        decorator.addStock(paint)
        decorator.calculateTotalStock();
        const actual = decorator.calculateEnoughPaint(room);
        assert.strictEqual(actual, true);
    });
})
