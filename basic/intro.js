/**
 * Created by Administrator on 6/19/14.
 */

var names = ["Bob", "Sally", "John", "Betty"];
var message = "Hello, ";

console.log(message + names[3]);


names.forEach(function(theName) {
    console.log(theName);
});

names.push("Jane");

console.log(names);

//Jane doesn't play well with others, she needs to go home.

names.pop();

//output the array
console.log(names);

