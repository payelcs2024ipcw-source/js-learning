// let a = 4;
// let b = 65;
// let c = 10;
// if(a>b && a>c){
//     console.log(a);
// }
// else if(b>a && b>c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }

// let day = 4;
// switch (day){
//     case 1 : console.log("Monday");
//     break;
//     case 2 : console.log("Tuesday");
//     break;
//     case 3 : console.log("Wednesday");
//     break;
//     case 4 : console.log("Thursday");
//     break;
//     case 5 : console.log("Friday");
//     break;
//     case 6 : console.log("Saturday");
//     break;
//     case 7 : console.log("Sunday");
//     break;
// }

    // equal comparison
// console.log('5'==5);
    //strict equality
// console.log('5' === 5);

    //ternary operator
//(condition)? sio(gives true) : val2(gives false)
// let age = 25;
// age=17;
// let status1 = (age>18) ? 'I can vote' : 'I cannot vote';
// console.log(status1);


// let name = "payel"
// let age = 19

// console.log(`hello i am ${name} of ${age} years old`);

// console.log(Math)
// console.log(Math.abs(-5));
// console.log(Math.random()); // gives number between 0-9
// console.log(Math.random()*10 +1); // to avoid 0 in the first place multiply by 10 by adding 1 give number between 1-9

// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //number to expect between max and min

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2026, 7, 1)
// let myCreatedDate = new Date(2026, 7, 1, 7, 0) //year, month(starts from 0), date, hour, min, sec
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myTime = Date.now();
// console.log(myTime) //always in milliseconds
// console.log(myCreatedDate.getTime()) // compare time created on that date
// console.log(Math.floor(Date.now()/1000))  // to get in seconds


// OBJECTS

//1. myObject literal
const mySymbol = "key"
const Puser = {
    name : "Payel",
    age: 18,
    [mySymbol] : "mykey", // correct way to write symbol
    "full name": "Payel Bera",
    location: "Delhi",
    dob: "01-08-2006",
    isLoggedIn: false
}

// console.log(Puser.age)
// console.log(Puser["age"]) //most preffered to use
// console.log(Puser["full name"]);
// console.log(typeof Puser[mySymbol]);

// const {name : n} = Puser     //new method to call function
// console.log(name)
// console.log(n)

// Object.freeze(Puser)
// Puser.age = 19
// console.log(Puser)

// Puser.greeting = function(){
//     console.log("hello user");
// }
// Puser.greetingTwo = function(){
//     console.log(`hello user ${this.name}`);     //usage of writing 
// }
// console.log(Puser.greeting());
// console.log(Puser.greetingTwo());

// 2. Object Singleton
// const tinderUser = new Object();     //singleton
// const tinderuser = {};       //non-singleton
// console.log(tinderUser);
// console.log(tinderuser);

//-----------MERGING----- (Object.assign) 
const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
//const obj3 = { obj1 , obj2 }        //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2)    [result will store in an empty myObject]
// const obj3 = Object.assign(obj1, obj2)   [result will be equal to obj1, as everything is getting stored there]

const obj3 = {...obj1, ...obj2}   //spread method = easy n modest 
// console.log(obj3);
// console.log(obj3 == obj1)


// JSON
// {
//     "name" : "payel" ,
//     "age" : "19" , 
//     "email" : "payel@gmail.com"
// }


//funtions
// function addTwoNumbers(n1 , n2){
//     console.log(n1+n2);   
// }
// addTwoNumbers(3,5)
// const result = addTwoNumbers(3,5)
// console.log("result:", result);      //result : undefined


function addTwoNumbers(n1 , n2){
    let result = n1+n2
    return result       //after result no lines will  get executed
    //*directly return can be written, no need of let (return n1+n2)
}
// const result = addTwoNumbers(3,5)
// console.log("result:", result);


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("payel"));
// console.log(loginUserMessage());    //prints undefined

function calculateCartPrice(...num1){  //three dots are used to convert the arguments given in the array
    return num1
}
// console.log(calculateCartPrice(200,500,6000));


const myArray = [200,500,8000]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([200,400,800]));      //normal way without making new const


// console.log(addOne(5));      //here can be initialised before
function addOne(num1){
    return num1 + 1
}
// console.log(addOne(5));

// console.log(addTwo(5));         //cannot be initialised before if function is stored under any variable
const addTwo =  function(num1){
    return num1 + 2
}
// console.log(addTwo(5));


const user = {
    username : "payel",
    price : 4000,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome `);      //this gives the current values n it only works under myObject
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "voila"
// user.welcomeMessage()
//console.log(this)     //at this point it will print empty braces

function hello(){
    console.log(this);
    
}
// hello()

//----------explicit arrow usage  () => {}
// const addNum = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addNum(4,6));

//-------implicit method
// const addNum = (num1 , num2) => num1 + num2
// const addNum = (num1 , num2) => (num1 + num2)
// const addNum = (num1 , num2) => ({username : "payel"})  //for myObject declaration using arrow
// console.log(addNum(4,6));


//---------IIFE (immediately invoked function expressions)
( function bla(){
    // console.log(`heyaaa`);
})();       //; is neccessary

( () => {
    // console.log("hihihi"); 
})()

//falsy values
// false , 0 , -0 , BigInt 0n , null , undefined , NaN , ""
//rest all r truthy values  "0" , 'false' , " " , [] , {} , function(){}

//Nullish Coalescing Operator (??) : null , undefined

let sio;
// sio = 5 ?? 10   IOP[]
sio = null ?? 10
// console.log(sio);


let n = 10;
for (let i = 1; i<=10; i++){
    // console.log(n + '*' + i + '=' + n*i);
}


//forof loop
        // --------syntax-----------
// for (const element of myObject) {          
//     console.log(element);
// }

const map = new Map()       
map.set("IN" , "India")
map.set("FR" , "France")
map.set("IN" , "India")     //map only gives unique value
// console.log(map);

for (const [key, value] of map) {          
    // console.log(key, ":-" , value);
}


//     *object is not iterable*     for-in loop works
const myObject = {     
js : "javascript",
cpp : "C++",
html : "hyper text markup language"
}
for (const key in myObject) {
    // console.log(myObject[key])
}

//     --------------------foreach loop--------------------
const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    },
]
myCoding.forEach((items) => {
    // console.log(items.languageFile);
})

//     --------------------filter--------------------
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((items)=> items > 4)
// const newNums = myNums.filter((items)=> {
    // items > 4
// })          //scope restrictions will give empty arrays instead use "return"

const newNums = myNums          //many maps in one arrays
            .map((num) => num*10)
            .map((num) => num+1)            
            .filter((num) => num>=40)
console.log(newNums);



