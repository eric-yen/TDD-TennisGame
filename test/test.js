var tennisGame = require('../tennisGame');
var assert = require('assert');

var gameObj = new tennisGame();

describe('Score 0 - 0 Test', function() {
    it('should return Love All', function() {
        assert.equal(gameObj.score(), "Love-All");
    });
});

describe('Score 1 - 0 Test', function() {
    it('should return Fifteen-Love', function() {
        gameObj.setPlayer1Score(1);
        assert.equal(gameObj.score(), "Fifteen-Love");
    });
});

describe('Score 2 - 0 Test', function() {
    it('should return Thirty-Love', function() {
        gameObj.setPlayer1Score(2);
        assert.equal(gameObj.score(), "Thirty-Love");
    });
});

describe('Score 3 - 0 Test', function() {
    it('should return Forty-Love', function() {
        gameObj.setPlayer1Score(3);
        assert.equal(gameObj.score(), "Forty-Love");
    });
});