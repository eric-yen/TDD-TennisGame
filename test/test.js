var tennisGame = require('../tennisGame');
var assert = require('assert');

var gameObj = new tennisGame();

describe('Score 0 - 0 Test', function() {
    it('should return Love All', function() {
        assert.equal(gameObj.score(), "Love-All");
    });
});