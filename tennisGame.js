var tennisGame = (function() {
    var _scoreMap = {
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    var _player1Score = 0;
    return {
        score: function() {
            if (_player1Score >= 1) {
                return _scoreMap[_player1Score] + "-Love";
            }
            return "Love-All";
        },

        setPlayer1Score: function(score) {
            _player1Score = score;
        }
    }
});

module.exports = tennisGame;