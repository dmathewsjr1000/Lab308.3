// Object
const myOldCar = {}

const vehicle = {
    interiorColor: 'red',
    year: '2024',
    brand: 'Toyota',
    model: 'Tundra',
    isElectric: false,
    mileage: 1000,
    "active registration": true,
    exteriorColor: 'blue',
};

console.log(vehicle);
console.log(vehicle.color);
console.log(vehicle.isElectric);
console.log(vehicle.mileage);

console.log(vehicle["year"]);
console.log(vehicle["active registration"]);


// deletes an object's property
delete vehicle["active registration"];

// add a new property
vehicle.activeRegistration = false;

vehicle.package = 'Tech Package';

//
vehicle.model = 'Camry';

console.log(vehicle);

// myOldCar.brand = 'Honda';
// myOldCar.year = '2000';
// myOldCar.color = 'White'
// console.log(myOldCar);

//
for (const key in vehicle) {
    // console.log(key);
    console.log(vehicle[key]);
    // console.log(`${key}: ${vehicle[key]}`);
}

const vehicle1 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

const vehicle2 = {
	color: "blue",
	year: 1989,
	make: "Audi",
	engine: {
		cylinders: 6,
		hp: 4000,
		size: 3.2
	}
}

console.log(vehicle1 === vehicle2); // false
console.log(vehicle1.color === vehicle2.color); // true
console.log(vehicle1.year === vehicle2.year); // true
console.log(vehicle1.engine === vehicle2.engine); // false
console.log(vehicle1.engine.cylinders === vehicle2.engine.cylinders);



const myPet = {
    Name: 'Persia',
    Type: 'Cat',
    Age: 6,
    Breed: 'Long Hair Tabby',
    Hobbies: ['Laying on people', 'Giving people five', 'Sleeping'],
    speakFrench: false,
    solveRubikCube: false,

};

// ==== Products =========

const products = [];


const tv = {
    brand: 'Sony',
    price: 350,
    isInStock: true,
    details: {
        colors: ['black'],
        sizes: ['42 inches', '55 inches'],
        smartTv: true,
        touchScreen: false,
    },
    isOnSale: true,
    categories: ['home', 'tech', 'outdoors']
}


const pc = {
    brand: 'Dell',
    price: 500,
    isInStock: true,
    details: {
        colors: ['white'],
        sizes: ['16 inches'],
        touchScreen: true,
    },
    isOnSale: false,
    categories: ['home', 'tech']
}


const sneakers = {
    brand: 'Nike',
    price: 80,
    isInStock: true,
    details: {
        colors: ['black', 'white', 'red'],
        sizes: ['7', '8', '9', '10']
    },
    isOnSale: false,
    categories: ['sports', 'outdoors']
}


products.push(tv);
products.push(pc);
products.push(sneakers);

console.log(products);

// Loops over the array of products
for (const product of products) {
    console.log(product);
    
    if (product.isOnSale) {
        console.log(`
        This ${product.brand} product 
        is on sale for $${product.price}
        `);
    }
}


// Loops over an Object
for (const key in sneakers) {
    console.log( `${key}: ${sneakers[key]}`);
}


sayHello();
// greeting(); // error!
// sayItBack(); // error

// ======= Function Definitions ===============

// Regular function Definition
function sayHello() {
    const result = 3 + 3;
    console.log('Hello World!');
    console.log(result);
}

// Function Expression Definition
const greeting = function() {
    console.log('Greetings!');
}

// Arrow Function Definition
const sayItBack = () => {
    console.log('Back!');
}

greeting();
sayItBack();

// Arrow Functions
const multiply = () => {
    console.log(3 * 3);
    console.log('Done!');
}

//
function add(num1, num2) {
    console.log(num1 + num2);
}

add(2, 3);

/ Arguments

function getDevObject(name) {
    console.log(arguments);
    const skills = [];
    //
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i]);
    }
    
    return {
        devName: name, 
        jobSkills: skills
    };
}

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'React');
const devObj1 = getDevObject('Max', 'JavaScript', 'PHP');
console.log(devObj);
console.log(devObj1);


function getDevObject(name, ...skills) {
    console.log('===> ', skills);
    return {
        devName: name,
        jobSkills: skills
    }
}

const devObj = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'React');
const devObj1 = getDevObject('Max', 'JavaScript', 'PHP');
console.log(devObj);
console.log(devObj1);

// ======== Default Parameters

// function setColor(bicycle, color) {
//     console.log(color);
// 	// set color to 'purple' if not provided
// 	bicycle.color = color || 'purple';
// }


function setColor(bicycle, wheels, size, color = 'Yellow') {
    console.log(color);
    bicycle.color = color;
    bicycle.wheels = wheels;
    bicycle.size = size;
}

const bikeObj = {};
setColor(bikeObj, 2, '20 inches');
console.log(bikeObj);


// ========= Functions as Arguments

const colors = ['red', 'green', 'blue'];

// Named Function
function printUpperCaseColors(color) {
    console.log(color.toUpperCase());
}

colors.forEach(printUpperCaseColors);

//
colors.forEach(function(color, index, arr) {
    console.log(color + index);
    console.log(arr);
});

// Arrow function
colors.forEach((color) => console.log(color));