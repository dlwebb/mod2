/**
 * Created by Administrator on 6/19/14.
 */

var person = {name: 'Jim', age: 18};

function ageCheck(person, age) {
    if(!person) { return false }
    if(!age) (age = 21);
    if(person.age > age) {
        return true;
    } else {
        return false;
    }

}

console.log(ageCheck(person));

console.log(ageCheck(person, 30));

