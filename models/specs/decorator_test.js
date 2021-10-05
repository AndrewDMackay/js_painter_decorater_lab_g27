

const assert = require('assert');

const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');


describe('Decorator', function(){

    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
        paint = new Paint(10)
        emptyPaint = new Paint(10, true)
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

    it('should be able to calculate, if there is enough paint to paint a room', function(){
        decorator.addStock(paint)
        decorator.calculateTotalStock();
        const actual = decorator.calculateEnoughPaint(room);
        assert.strictEqual(actual, true);
    });

    it('should be able to paint a room, if there is enough paint', function(){
        decorator.addStock(paint)
        decorator.calculateTotalStock();
        decorator.calculateEnoughPaint(room);
        decorator.decoratorPaintsRoom(room);
        const actual = room.painted;
        assert.strictEqual(actual, true);
    });

    // Extensions..

    it('should be able to decrease stock, if the room has been painted', function(){
        decorator.addStock(paint)
        decorator.calculateTotalStock();
        decorator.calculateEnoughPaint(room);
        decorator.decoratorPaintsRoom(room);
        const actual = decorator.decreaseStock(room);
        assert.strictEqual(actual, 2);
    });

    it('should be able to remove empty paint cans from stock', function(){
        decorator.addStock(emptyPaint)
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [])});
    });
})

