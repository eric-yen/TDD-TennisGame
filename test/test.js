var tennisGame = require('../tennisGame');
var assert = require('assert');

var gameObj = new tennisGame();

describe('Score 0 - 0 Test', function() {
    it('should return Love All', function() {
        gameObj.setPlayer1Score(0);
        gameObj.setPlayer2Score(0);
        assert.equal(gameObj.score(), "Love-All");
    });
});

describe('Score 1 - 0 Test', function() {
    it('should return Fifteen-Love', function() {
        gameObj.setPlayer1Score(1);
        gameObj.setPlayer2Score(0);
        assert.equal(gameObj.score(), "Fifteen-Love");
    });
});

describe('Score 2 - 0 Test', function() {
    it('should return Thirty-Love', function() {
        gameObj.setPlayer1Score(2);
        gameObj.setPlayer2Score(0);
        assert.equal(gameObj.score(), "Thirty-Love");
    });
});

describe('Score 3 - 0 Test', function() {
    it('should return Forty-Love', function() {
        gameObj.setPlayer1Score(3);
        gameObj.setPlayer2Score(0);
        assert.equal(gameObj.score(), "Forty-Love");
    });
});

describe('Score 0 - 1 Test', function() {
    it('should return Love-Fifteen', function() {
        gameObj.setPlayer1Score(0);
        gameObj.setPlayer2Score(1);
        assert.equal(gameObj.score(), "Love-Fifteen");
    });
});

describe('Score 0 - 2 Test', function() {
    it('should return Love-Thirty', function() {
        gameObj.setPlayer1Score(0);
        gameObj.setPlayer2Score(2);
        assert.equal(gameObj.score(), "Love-Thirty");
    });
});

describe('Score 0 - 3 Test', function() {
    it('should return Love-Forty', function() {
        gameObj.setPlayer1Score(0);
        gameObj.setPlayer2Score(3);
        assert.equal(gameObj.score(), "Love-Forty");
    });
});

describe('Score 1 - 1 Test', function() {
    it('should return Fifteen-All', function() {
        gameObj.setPlayer1Score(1);
        gameObj.setPlayer2Score(1);
        assert.equal(gameObj.score(), "Fifteen-All");
    });
});