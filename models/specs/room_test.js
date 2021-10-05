

const assert = require('assert');

const Room = require('../room.js');


describe('Room', function(){

    let room;

    beforeEach(function(){
        room = new Room('15 m2');
    });

    it('should have an area', function(){
        const actual = room.area;
    });

    it('should have painted', function(){
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    });

