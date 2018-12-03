var tennisGame = (function() {
    var _scoreMap = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    var _player1 = "Player1";
    var _player2 = "Player2";
    var _player1Score = 0;
    var _player2Score = 0;

    return {
        score: function() {
            if (this.isDuce()) {
                return "Duce";
            }
            else if (this.isSameScoreButNotDuce()) {
                return _scoreMap[_player1Score] + "-All"; 
            }
            else if (this.isNormalScore()) {
                return _scoreMap[_player1Score] + "-" + _scoreMap[_player2Score];
            }
            return this.advancedPlayer() + this.advOrWin();
        },

        setPlayer1Score: function(score) {
            _player1Score = score;
        },

        setPlayer2Score: function(score) {
            _player2Score = score;
        },

        advancedPlayer: function() {
            return ((_player1Score > _player2Score) ? _player1 : _player2);
        },

        advOrWin: function() {
            return (Math.abs(_player1Score - _player2Score) === 1) ? " Adv" : " Win";
        },

        isDuce: function() {
            return ((_player1Score === _player2Score) && (_player1Score >= 3));
        },

        isSameScoreButNotDuce: function() {
            return (_player1Score === _player2Score) && (_player1Score < 3);
        },

        isNormalScore: function() {
            return (_player1Score <= 3) && (_player2Score <= 3) && (_player1Score != _player2Score);
        }
    }
});

module.exports = tennisGame;