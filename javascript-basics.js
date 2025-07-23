// ========================================
// COMPREHENSIVE JAVASCRIPT BASICS TUTORIAL
// ========================================

console.log("=== JAVASCRIPT BASICS TUTORIAL ===\n");

// 1. VARIABLES AND DATA TYPES
console.log("1. VARIABLES AND DATA TYPES");
console.log("--------------------------------");

// Variable declarations
var oldStyle = "var is function-scoped";
let modernStyle = "let is block-scoped";
const constant = "const cannot be reassigned";


let number1 = 1
let abdulaziz = "abdulaziz"

console.log("Variables:", {oldStyle, modernStyle, constant}, number1);

console.log(`number1 ${number1} he is`)

// Primitive data types
let stringType = "Hello World"; //string
let numberType = 42; //number
let booleanType = true; // boolean
let nullType = null;
let undefinedType;
let symbolType = Symbol("unique");
let bigintType = BigInt(9007199254740991);

console.log("Data Types:", {
    string: typeof stringType,
    number: typeof numberType,
    boolean: typeof booleanType,
    null: typeof nullType,
    undefined: typeof undefinedType,
    symbol: typeof symbolType,
    bigint: typeof bigintType
});

// 2. ARRAYS - COMPREHENSIVE COVERAGE
console.log("\n2. ARRAYS - COMPREHENSIVE COVERAGE");
console.log("-----------------------------------");

// Array creation and basic operations
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "object"}];

console.log("Original arrays:", {fruits, numbers, mixed});

// Array methods
console.log("\nArray Methods:");

// Adding/removing elements
fruits.push("grape"); // Add to end
fruits.unshift("mango"); // Add to beginning
let lastFruit = fruits.pop(); // Remove from end
let firstFruit = fruits.shift(); // Remove from beginning

console.log("After push/unshift/pop/shift:", fruits);
console.log("Removed:", {firstFruit, lastFruit});

// Array iteration methods
console.log("\nArray Iteration Methods:");

// forEach
console.log("forEach:");
numbers.forEach((num, index) => {
    console.log(`  Index ${index}: ${num}`);
});

// map - transform elements
let doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

// filter - filter elements
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filtered (even):", evenNumbers);

// reduce - accumulate values
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Reduced (sum):", sum);

// find and findIndex
let found = numbers.find(num => num > 3);
let foundIndex = numbers.findIndex(num => num > 3);
console.log("Found:", found, "at index:", foundIndex);

// some and every
let hasEven = numbers.some(num => num % 2 === 0);
let allPositive = numbers.every(num => num > 0);
console.log("Has even:", hasEven, "All positive:", allPositive);

// Array manipulation
let sliced = numbers.slice(1, 4); // Extract portion
let spliced = [...numbers]; // Copy array
spliced.splice(2, 1, 99); // Remove 1 element at index 2, insert 99

console.log("Sliced:", sliced);
console.log("Spliced:", spliced);

// Array searching and sorting
let searchArray = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Original:", searchArray);
console.log("Includes 5:", searchArray.includes(5));
console.log("Index of 4:", searchArray.indexOf(4));
console.log("Sorted:", [...searchArray].sort((a, b) => a - b));
console.log("Reversed:", [...searchArray].reverse());

// 3. OBJECTS
console.log("\n3. OBJECTS");
console.log("-----------");

// Object creation and manipulation
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    hobbies: ["reading", "swimming", "coding"],
    address: {
        street: "123 Main St",
        zipCode: "10001"
    },
    // Method in object
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    // Arrow function (doesn't have 'this')
    info: () => "This is an info method"
};

console.log("Person object:", person);
console.log("Greeting:", person.greet());
console.log("Info:", person.info());

// Object methods
console.log("\nObject Methods:");
console.log("Object.keys():", Object.keys(person));
console.log("Object.values():", Object.values(person));
console.log("Object.entries():", Object.entries(person));

// Destructuring
let {name, age, city} = person;
console.log("Destructured:", {name, age, city});

// 4. CLASSES - COMPREHENSIVE COVERAGE
console.log("\n4. CLASSES - COMPREHENSIVE COVERAGE");
console.log("------------------------------------");

// Basic class definition
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.isAlive = true;
    }
    
    // Instance method
    speak() {
        return `${this.name} makes a sound`;
    }
    
    // Getter
    get info() {
        return `${this.name} is a ${this.species}`;
    }
    
    // Setter
    set status(alive) {
        this.isAlive = alive;
    }
    
    // Static method
    static compareAnimals(animal1, animal2) {
        return animal1.species === animal2.species;
    }
}

// Inheritance
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "dog"); // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    speak() {
        return `${this.name} barks`;
    }
    
    // New method specific to Dog
    wagTail() {
        return `${this.name} wags its tail`;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name, "cat");
        this.color = color;
    }
    
    speak() {
        return `${this.name} meows`;
    }
    
    purr() {
        return `${this.name} purrs`;
    }
}

// Using classes
let genericAnimal = new Animal("Generic", "unknown");
let myDog = new Dog("Rex", "Golden Retriever");
let myCat = new Cat("Whiskers", "black");

console.log("Animals created:");
console.log("Generic:", genericAnimal.info);
console.log("Dog:", myDog.info, "-", myDog.speak());
console.log("Cat:", myCat.info, "-", myCat.speak());

console.log("\nClass-specific methods:");
console.log("Dog wag:", myDog.wagTail());
console.log("Cat purr:", myCat.purr());

console.log("\nStatic method:");
console.log("Same species?", Animal.compareAnimals(myDog, myCat));

// 5. FUNCTIONS - ALL TYPES
console.log("\n5. FUNCTIONS - ALL TYPES");
console.log("-------------------------");

// Function declaration
function regularFunction(a, b) {
    return a + b;
}

// Function expression
const functionExpression = function(a, b) {
    return a * b;
};

// Arrow functions
const arrowFunction = (a, b) => a - b;
const singleParamArrow = x => x * x;
const noParamArrow = () => "Hello World";

// Higher-order function
const higherOrderFunction = (func, a, b) => {
    return func(a, b);
};

console.log("Function results:");
console.log("Regular:", regularFunction(5, 3));
console.log("Expression:", functionExpression(5, 3));
console.log("Arrow:", arrowFunction(5, 3));
console.log("Single param arrow:", singleParamArrow(5));
console.log("No param arrow:", noParamArrow());
console.log("Higher-order:", higherOrderFunction(regularFunction, 10, 20));

// Function with default parameters
function greetUser(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("Default params:", greetUser());
console.log("With params:", greetUser("Alice", "Hi"));

// Rest parameters and spread operator
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

let numberArray = [1, 2, 3, 4, 5];
console.log("Rest params:", sumAll(1, 2, 3, 4, 5));
console.log("Spread operator:", sumAll(...numberArray));

// 6. PROMISES AND ASYNC/AWAIT
console.log("\n6. PROMISES AND ASYNC/AWAIT");
console.log("----------------------------");

// Promise creation
function createPromise(shouldResolve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise was rejected!");
            }
        }, 1000);
    });
}

// Using Promises with .then()
console.log("Creating promise...");
createPromise(true)
    .then(result => {
        console.log("Promise result:", result);
        return "Chained result";
    })
    .then(chainedResult => {
        console.log("Chained:", chainedResult);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Async/await function
async function asyncFunction() {
    try {
        console.log("Async function started...");
        const result1 = await createPromise(true);
        console.log("Async result 1:", result1);
        
        const result2 = await createPromise(true);
        console.log("Async result 2:", result2);
        
        return "Async function completed";
    } catch (error) {
        console.error("Async error:", error);
    }
}

// Call async function
asyncFunction().then(result => console.log("Final result:", result));

// Promise.all and Promise.race
Promise.all([
    createPromise(true),
    createPromise(true),
    createPromise(true)
]).then(results => {
    console.log("Promise.all results:", results);
});

// 7. ERROR HANDLING
console.log("\n7. ERROR HANDLING");
console.log("------------------");

// Try-catch with regular functions
function riskyFunction() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error("Random error occurred!");
    }
    return "Success!";
}

try {
    let result = riskyFunction();
    console.log("Risky function result:", result);
} catch (error) {
    console.error("Caught error:", error.message);
} finally {
    console.log("Finally block always executes");
}

// Custom error classes
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "CustomError";
        this.code = code;
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error", 500);
}

try {
    throwCustomError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error("Custom error caught:", error.message, "Code:", error.code);
    } else {
        console.error("Unknown error:", error);
    }
}

// 8. ADVANCED CONCEPTS
console.log("\n8. ADVANCED CONCEPTS");
console.log("---------------------");

// Closures
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log("Closure result:", addFive(3));

// Destructuring assignment
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log("Array destructuring:", {first, second, rest});

const obj = {a: 1, b: 2, c: 3, d: 4};
const {a, c, ...remaining} = obj;
console.log("Object destructuring:", {a, c, remaining});

// Template literals
const name2 = "World";
const greeting = `Hello, ${name2}!
This is a multi-line
template literal.`;
console.log("Template literal:", greeting);

// Symbols and iterators
const mySymbol = Symbol("description");
const objWithSymbol = {
    [mySymbol]: "symbol value",
    normalProp: "normal value"
};

console.log("Symbol usage:", objWithSymbol[mySymbol]);

// Map and Set
const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
console.log("Map:", [...myMap.entries()]);

const mySet = new Set([1, 2, 2, 3, 3, 4]);
console.log("Set (unique values):", [...mySet]);

console.log("\n=== JAVASCRIPT BASICS TUTORIAL COMPLETED ===\n");

module.exports = {
    Animal,
    Dog,
    Cat,
    createPromise,
    asyncFunction,
    CustomError
}; 


