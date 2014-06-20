var types = {
    string: "a string",
    number: 42,
    boolean: true,
    array: [1,2,3,4]
};

var key;

for(key in types) {
    console.log(key, types[key])
}

var i;
console.log('iterating array')
for(i=0; i< types.array.length; i++) {
    console.log(i, types.array[i]);
}

var sum = add(4,8);

function add(x,y) {
    return x + y;
}//end function add

console.log(sum);

var test = "me";
console.log(test);
var sum = add(4,8);

function add(x,y) {
    test = "changed";
    return x + y;
}//end function add

console.log(sum);
console.log(test);

function add() {
    var sum = 0;
    for(var i=0; i < arguments.length; i++){
        sum  += arguments[i];
    }//end for
    return sum;
}//end function add

console.log(add(1,2,3,4));
console.log(add(1,2,add(3,4)))

