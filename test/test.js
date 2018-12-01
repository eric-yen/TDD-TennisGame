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

describe('Score 2 - 2 Test', function() {
    it('should return Thirty-All', function() {
        gameObj.setPlayer1Score(2);
        gameObj.setPlayer2Score(2);
        assert.equal(gameObj.score(), "Thirty-All");
    });
});

describe('Score 3 - 3 Test', function() {
    it('should return Duce', function() {
        gameObj.setPlayer1Score(3);
        gameObj.setPlayer2Score(3);
        assert.equal(gameObj.score(), "Duce");
    });
});

describe('Score 4 - 4 Test', function() {
    it('should return Duce', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Duce");
    });
});

describe('Score 4 - 3 Test', function() {
    it('should return Player1 Adv', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(3);
        assert.equal(gameObj.score(), "Player1 Adv");
    });
});

describe('Score 5 - 4 Test', function() {
    it('should return Player1 Adv', function() {
        gameObj.setPlayer1Score(5);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Player1 Adv");
    });
});

describe('Score 3 - 4 Test', function() {
    it('should return Player2 Adv', function() {
        gameObj.setPlayer1Score(3);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Player2 Adv");
    });
});

describe('Score 4 - 5 Test', function() {
    it('should return Player2 Adv', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(5);
        assert.equal(gameObj.score(), "Player2 Adv");
    });
});

describe('Score 4 - 0 Test', function() {
    it('should return Player1 Win', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(0);
        assert.equal(gameObj.score(), "Player1 Win");
    });
});

describe('Score 4 - 1 Test', function() {
    it('should return Player1 Win', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(1);
        assert.equal(gameObj.score(), "Player1 Win");
    });
});

describe('Score 4 - 2 Test', function() {
    it('should return Player1 Win', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(2);
        assert.equal(gameObj.score(), "Player1 Win");
    });
});

describe('Score 0 - 4 Test', function() {
    it('should return Player2 Win', function() {
        gameObj.setPlayer1Score(0);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Player2 Win");
    });
});

describe('Score 1 - 4 Test', function() {
    it('should return Player2 Win', function() {
        gameObj.setPlayer1Score(1);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Player2 Win");
    });
});

describe('Score 2 - 4 Test', function() {
    it('should return Player2 Win', function() {
        gameObj.setPlayer1Score(2);
        gameObj.setPlayer2Score(4);
        assert.equal(gameObj.score(), "Player2 Win");
    });
});

describe('Score 5 - 3 Test', function() {
    it('should return Player1 Win', function() {
        gameObj.setPlayer1Score(5);
        gameObj.setPlayer2Score(3);
        assert.equal(gameObj.score(), "Player1 Win");
    });
});

describe('Score 6 - 4 Test', function() {
    it('should return Player1 Win', function() {
        gameObj.setPlayer1Score(5);
        gameObj.setPlayer2Score(3);
        assert.equal(gameObj.score(), "Player1 Win");
    });
});

describe('Score 3 - 5 Test', function() {
    it('should return Player2 Win', function() {
        gameObj.setPlayer1Score(3);
        gameObj.setPlayer2Score(5);
        assert.equal(gameObj.score(), "Player2 Win");
    });
});

describe('Score 4 - 6 Test', function() {
    it('should return Player2 Win', function() {
        gameObj.setPlayer1Score(4);
        gameObj.setPlayer2Score(6);
        assert.equal(gameObj.score(), "Player2 Win");
    });
});