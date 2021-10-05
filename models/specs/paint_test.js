
const assert = require('assert');

const Paint = require('../paint.js');


describe('Paint', function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(10);
    });

    it('should have litres', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });

    it('should be able to check if it is full', function(){
        const actual = paint.empty;
        assert.strictEqual(actual, false);
    });

    it('should be able to be emptied', function(){
        paint.emptyPaint(paint)
        const actual = paint.empty;
        assert.strictEqual(actual, true);
    });
})


