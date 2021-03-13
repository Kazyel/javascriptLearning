// variável

var n10 = console.log("You are smart?");
n10;




// funções
function sayHello() {
	console.log("Hello");
}

sayHello();

var sayBye = function () {
	console.log("Bye");
}

sayBye();

function multiply(a, b) {
	if (a > 10 || b > 10) {
		console.log("That's too hard");
	} else {
		return a * b;
	}
}

function checkDriverAge2() {

	var age = prompt("What's your age?");

	if (Number(age) < 18) {

		alert("Sorry, you are too young to drive this car. Powering off");
	} else if (Number(age) > 18) {

		alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {

		alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

function checkDriverAge(age) {
	if (Number(age) < 18) {

		return "Sorry, you are too young to drive this car. Powering off";

	} else if (Number(age) > 18) {

		return "Powering On. Enjoy the ride!";

	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";

	}
}



// Arrays
// concat, push, pop etc...

var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

var numbers = [1, 2, 3, 4];

var booleans = [true, false, true];

var functionList = [function apple() {
	console.log("apple");
}];

var newBooleans = booleans.concat([false]);




// Objects

var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
};



// Loop 

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

var todosLength = todos.length;

for (var i = 0; i < todos.length; i++) {
	console.log(todos[i], i);
}

function logTodos(todo, i) {
	console.log(todo, i);
}
todos.forEach(logTodos);

var counterOne = 10;

while (counterOne > 10) {
	console.log("while", counterone);
	counterone--;
}
var counterTwo = 10
do {
	console.log("do while", counterTwo);
	counterTwo--;
} while (counterTwo > 10);



// DOM Events

// var buttonD = document.getElementById("enter");
// var inputD = document.getElementById("userinput");
// var ulD = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElementD() {
// 	var li = document.createElementD("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClickD() {
// 	if (inputLength() > 0) {
// 		createListElementD();
// 	}
// }

// function addListAfterKeypressD(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElementD();
// 	}
// }

// buttonD.addEventListener("click", addListAfterClick);

// inputD.addEventListener("keypress", addListAfterKeypress);




// Background Generator with DOM

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var color3 = document.querySelector(".color3");
var h1 = document.getElementById("colortext");


function setGradient() {
	body.style.background =
		"linear-gradient(to right, " +
		color1.value +
		", " +
		color2.value +
		")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setTextColor() {
	h1.style.color = color3.value;
}

color3.addEventListener("input", setTextColor);





// Root Scope (window)
var fun = 5;

function funFunction() {
	// child scope
	var fun = "hellooo";
	console.log(1, fun);
}

function funerFunction() {
	// child scope
	var fun = "Byee";
	console.log(2, fun);
}

function funestFunction() {
	// child scope~
	fun = "AAAAAAAAHH";
	console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();




// Control Flow
// Terminary Operator
function isUserValid(bool) {
	return bool;
}
var answer = isUserValid(true) ? "You may enter." : "Access deniied."
console.log(answer);



// Switch
function moveCommand(direction) {
	var whatHappens;
	switch (direction) {
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens;
}




// let + const (not use var anymore!)
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90){
	let wizardLevel = true;
}



// Destructuring 
const obj = {
	player2: "mateus",
	experience2: 100,
	wizardLevel2: false
}

const { player2 , experience2 } = obj;
let { wizardLevel2 } = obj;




// Object properties
const name3 = "john snow";

const obj2 = {
	[name3]: 'hello',
	[1 + 2]: 'hihi'
}




//Template strings
const name2 = "Sally"
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name2} you seem to be ${age - 10}. What a lovely ${pet} you have`;




// default arguments
function greet(nameF = '', ageF = 30, petF = 'cat') {
	return `Hello ${nameF} you seem to be ${ageF - 10}. What a lovely ${petF} you have`;
}




// Symbol
let sym1 = Symbol();
let sym2 = Symbol('food');
let sym3 = Symbol('food');




// arrow functions
const add = (a, b) => a + b;



// Advanced Functions!
const firstA = () => {
	const greetA = 'Hi';
	const secondA = () => {
		alert(greetA);
	}
	return secondA;
}

const newAFunc = firstA();
newAFunc();


// Currying
const multiplyC = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));

const multiplyByFive = curriedMultiply(5);



// Compose
const compose = (fu, gu) => (aa) => fu(gu(aa));
const sum = (num) => num + 1;



// Avoiding Side Effects & functional purity
let avoiD = 1;

function b() {
	avoiD = 2;
}


// Advanced Arrays
const arrayA = [1, 2, 10, 16]
const doubleA = []

const newArrayA = arrayA.forEach((num) => {
	doubleA.push(num * 2);
})
console.log('forEach', doubleA);



// map, filter, reduce
const mapArray = arrayA.map(num => num * 2);
console.log('map', mapArray);

const filterArray = arrayA.filter(num => num > 5);
console.log('filter', filterArray);

const reduceArray = arrayA.reduce((accumulator, num) => {
	return accumulator + num
}, 5);
console.log('reduce', reduceArray);



// Advanced Object
// reference
var object1 = { 
	value: 10
};
var object2 = object1;
var object3 = {
	value: 10
};

// context vs scope
const object4 = {
	a: function () {
		console.log(this)
	}
}

// instantiation
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log('wizard', this)
	}
	play() {
		console.log(`WEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

// Pass by Reference vs Per Value
var aV = 5;
var bV = aV;
bV++;//Pass by Value

let mRef = [1, 2, 3, 4, 5];
let mRef2 = mRef;
mRef2.push(1000);

let objR = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me'
	}
};

let cloneR = Object.assign({}, objR);
let cloneR2 = {
	...objR
};
let superClone = JSON.parse(JSON.stringify(objR));

objR.c.deep = 'hahaha';

console.log(cloneR);//shallow cloning
console.log(cloneR2);//shallow cloning
console.log(objR);//shallow cloning
console.log(superClone);//deep cloning