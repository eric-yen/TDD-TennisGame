var tennisGame = (function() {
    var _scoreMap = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty'
    }
    var _player1Score = 0;
    var _player2Score = 0;

    return {
        score: function() {
            if ((_player1Score <=2) && (_player1Score === _player2Score)) {
                return _scoreMap[_player1Score] + "-All"; 
            }
            else if (((_player1Score >= 1) && (_player1Score <= 3) && (_player2Score === 0)) || 
                     ((_player2Score >= 1) && (_player2Score <= 3) && (_player1Score === 0))) {
                return _scoreMap[_player1Score] + "-" + _scoreMap[_player2Score];
            }
            else if ((_player1Score >= 3) && (_player1Score === _player2Score)) {
                return "Duce";
            }
            else if ((_player1Score >= 4) && (_player1Score - _player2Score === 1)) {
                return "Player1 Adv";
            }
            else if ((_player2Score >= 4) && (_player2Score - _player1Score === 1)) {
                return "Player2 Adv";
            }
            else if ((_player1Score >= 4) && (_player2Score <= 2)) {
                return "Player1 Win";
            }
            else if ((_player2Score >= 4) && (_player1Score <= 2)) {
                return "Player2 Win";
            }
            else if ((_player1Score >=5) && (_player1Score - _player2Score === 2)) {
                return "Player1 Win";
            }
            else if ((_player2Score >=5) && (_player2Score - _player1Score === 2)) {
                return "Player2 Win";
            }
            return "undefined";
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