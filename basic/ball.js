/**
 * Created by Administrator on 6/18/14.
 */


var field = {
    top: 0
    , left: 0
    , width: 100
    , height: 100
};

var ball = (x: 50, y: 50);

isBallInBounds(ball);

function isBallInBounds(ball) {
    if(ball.x < field.left) return false;
    if(ball.x > field.left + field.width) return false;
}