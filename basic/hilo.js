/**
 * Created by Administrator on 6/19/14.
 */

var times = 10000,
    guesses = [];

while(times--){
    guesses.push(hilo().length);
}

guesses.sort();

console.log("quickest", guesses[0]);
console.log("longest", guesses[guesses.length-1]);

var sum = guesses.reduce(function(prev, curr){
    return prev += curr;
}, 0);

console.log("total guesses", sum);
console.log("average", sum / guesses.length);



function hilo() {

    var min = 1,
        max = 100000000,
        guesses = [],
        num = randomNum(max),
        found = false;

    //console.log("secret number", num);

    while (!found) {
        guess();
    }

    return guesses;

    function guess() {
        var low = getHighestLow(),
            high = getLowestHigh(),
            current = {
                num: low + Math.floor((high - low) / 2)
            };

        if (guesses.filter(function (guess) {
            return guess.num === current.num;
        }).length) current.num += 1;

        if (current.num < num) current.dir = -1;
        else if (current.num > num) current.dir = 1;
        else current.dir = 0;


        if (current.num === num) found = true;

        guesses.push(current);

        //console.log(guesses.length, current);

    }

    function getHighestLow() {
        var low = min;

        guesses.forEach(function (guess) {
            if (guess.dir === -1 && guess.num > low) {
                low = guess.num;
            }
        });

        return low;
    }

    function getLowestHigh() {
        var high = max;

        guesses.forEach(function (guess) {
            if (guess.dir === 1 && guess.num < high) {
                high = guess.num;
            }
        });

        return high;

    }

    function randomNum(max) {
        return Math.ceil(Math.random() * max);
    }

}