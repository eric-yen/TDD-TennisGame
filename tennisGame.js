var tennisGame = (function() {
    var _player1Score = 0;
    return {
        score: function() {
            if (_player1Score === 1) {
                return "Fifteen-Love";
            }
            else if (_player1Score === 2) {
                return "Thirty-Love";
            }
            else if (_player1Score === 3) {
                return "Forty-Love";
            }
            return "Love-All";
        },

        setPlayer1Score: function(score) {
            _player1Score = score;
        }
    }
});

module.exports = tennisGame;