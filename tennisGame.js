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

    var advancedPlayer = function() {
        return ((_player1Score > _player2Score) ? _player1 : _player2);
    }

    var advOrWin = function() {
        return (Math.abs(_player1Score - _player2Score) === 1) ? " Adv" : " Win";
    }

    var isDeuce = function() {
        return ((_player1Score === _player2Score) && (_player1Score >= 3));
    }

    var isSameScoreButNotDeuce = function() {
        return (_player1Score === _player2Score) && (_player1Score < 3);
    }

    var isNormalScore = function() {
        return (_player1Score <= 3) && (_player2Score <= 3) && (_player1Score != _player2Score);
    }

    return {
        score: function() {
            if (isDeuce()) {
                return "Deuce";
            }
            else if (isSameScoreButNotDeuce()) {
                return _scoreMap[_player1Score] + "-All"; 
            }
            else if (isNormalScore()) {
                return _scoreMap[_player1Score] + "-" + _scoreMap[_player2Score];
            }
            return advancedPlayer() + advOrWin();
        },

        setPlayer1Score: function(score) {
            _player1Score = score;
        },

        setPlayer2Score: function(score) {
            _player2Score = score;
        }
    }
});

module.exports = tennisGame;