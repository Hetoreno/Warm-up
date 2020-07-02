//Variables
var x=6;
console.log(x);

var xx;
xx=8;
console.log(xx);

var y=8;
y=99;
console.log(y);

var something=null;
console.log(something);

const adds=3;
const sub=3;
console.log(adds+sub);

let ye =7;
ye = ye + 3;
console.log(ye);

let yo = 8;
yo+=4;
console.log(yo);

var n = `hi`;
var intro=`${n} , I'm your new friend!`;
console.log(intro);
//Arrays
console.log('');

const food=[`hector`,2334,false];
console.log(food);

let ghost;
ghost=[`I love food`, 2234,true];
console.log(ghost);

let list= new Array();
list[0]=`My name is ..`;
list[1]=`is who`;
list[2]=42423;
list[3]=true;
console.log(list);

//Loops
console.log(``);

for (var i=0; i <= 4; i++){
    console.log(i);
}

for (let e=0; e<=12; e+=3){
    console.log(e);
}
//.length
console.log(``);
let hi=[`hello`,1111,4444,true];
for (e=0;e<hi.length;e++){
    console.log(hi[e]);
}
//If statements
console.log(``);

var op1=`correct`;
var op2=`nope`;
if (op1 === `correct`){
    console.log(`Thats correct`);
} else if (op1 === op2){
    console.log(`Thats correct!!!`);
} else {
    console.log(`huhhhh`);
}
//Switch and break statements
console.log(``);

const fruit=`mango`;

switch(fruit){
    case `banana`:
        console.log(`I love bananas`);
        break;
    case `apples`:
        console.log(`I love apples`);
        break;
    default:
        console.log(`Where\'s mangos?? :(`);
}
//Functions
console.log(``);

function newNumber(number){
console.log(number);
}
newNumber(223);

console.log(`......`);

function newOrder(message){
console.log(`be traced from the beginning`);
}

function newDisplay(text){
console.log(`I hope this message goes thru so the second can....`);

newOrder();
}

newDisplay();

console.log(`......`);

function fracts(one,two){
    if (one < two){
        return one;
    } else {
        return one + two;
    }
}

const updated= fracts(5,1);
console.log(updated);
//Objects
console.log(``);
var newList={
    name: `Hector`,
    number: 233,
    itsTrue: false
    };
    console.log(newList);
//Methods in Objects
console.log(``);

var orderList={
    name:`Cheeseburger`,
    count:2,
    itsTrue: true,
    macro: function(){
        this.calories = 200 * this.count;
    }
};

orderList.macro();
console.log(orderList);
