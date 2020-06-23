//Variables
var x =5;
console.log(x);

var y;
y =8;
console.log(y);

var xx = 7;
xx=89;
console.log(xx);

var h = 7;
var hh= 8;
console.log(h + hh);

var k =8;
k = k + 6;
console.log(k);

var kk =9;
kk+=7;
console.log(kk);

var why = null;
console.log(why);
//Arrays
console.log('');

var list=['Hello',1888,false];
console.log(list);

var newList;
newList=['Name',1998, true];
console.log(newList);

var newNew= new Array();
newNew[0]='Hector';
newNew[1]=123;
newNew[2]=null;
newNew[3]=true;
console.log(newNew);

console.log('');
//Loops
for (i=0; i<=5; i++){
    console.log(i);
}

console.log('');

for (e=0; e<=8; e+=2){
    console.log(e);
}

console.log('');
//.length
var looper=['hello',12,true];
for (i=0; i < looper.length; i++){
    console.log(looper[i]);
}
//If statements
console.log('');

var one=1;
var two=2;

if (one < two){
    console.log(true);
} else {
    console.log(false);
}
//Continue and break(loops)


console.log('');
//Functions
function action(newNumber){
    console.log(newNumber);
}

action(5);
//Objects
var obg={
    name: 'Hector',
    year:8888,
    itsTrue: false
};

console.log(obg)

console.log('');
//Methods in Objects

var groceryList={
    types: 'healthy',
    amount: 6,
    itsGood: true,
        calcCalo: function(){
            this.calories = 8 * this.amount; 
        }
};

groceryList.calcCalo();
console.log(groceryList);