const qaArray = [
    {
        id: 1,
        question: {
            title: "javascript For in loop",
            description: `
Write a JavaScript function named printObjectProperties that 
takes an object as an argument and uses the for...in loop to 
print all the properties and their values in the following 
format: "property: value". If the object is empty, 
print "Object is empty".
`
        },
        answer: `
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    occupation: "Software Developer"
};

function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
        return false;
    }

    for (const key in obj) {
        console.log(\`\${key} : \${obj[key]} \`);
    }
}

printObjectProperties(person);
`
    },
    {
        id: 2,
        question: {
            title: "javascript function returns",
            description: `
Write a JavaScript function named findMaxNumber that takes an 
array of numbers as an argument and returns the maximum number 
in the array. If the array is empty, the function should return null.

Example:

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1)); // Output: 30

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null
`
        },
        answer: `
function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = Math.max(...numbers);
    return max;
}

const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2));

const emptyArray = [];
console.log(findMaxNumber(emptyArray));
`
    },
    {
        id: 3,
        question: {
            title: "javascript Spread Operator",
            description: `
Write a JavaScript function named mergeArrays that takes 
two arrays as arguments and returns a new array that 
merges both arrays using the spread operator.

Example:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]
`
        },
        answer: `
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(mergeArrays(arr1, arr2));
`
    },
    {
        id: 4,
        question: {
            title: "JavaScript arrow function",
            description: `
Write a JavaScript arrow function named calculateSquare 
that takes a number as an argument and returns the 
square of that number.

Example:

console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64
`
        },
        answer: `
const calculateSquare = number => number * number;

console.log(calculateSquare(5));
console.log(calculateSquare(8));
`
    },
    {
        id: 5,
        question: {
            title: "javascript es6 map",
            description: `
Write a JavaScript function named doubleNumbers that 
takes an array of numbers as an argument and uses 
the ES6 map method to return a new array where 
each number is doubled.

Example:

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
`
        },
        answer: `
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));
`
    },
    {
        id: 6,
        question: {
            title: "JavaScript es6 static keyword",
            description: `
Create a JavaScript class named MathUtility with 
an ES6 static method called multiply. The multiply 
method should take two parameters and return their product.

Example:

console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16
`
        },
        answer: `
class MathUtility {
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtility.multiply(5, 3));
console.log(MathUtility.multiply(2, 8));
`
    },
    {
        id: 7,
        question: {
            title: "JavaScript ES6 class inheritance",
            description: `
Create a JavaScript class named Animal with a constructor
that takes two parameters: name and sound. The class should
have a method named makeSound that logs the 
sound of the animal.

Next, create a subclass of Animal named Dog. 
The Dog class should have an additional 
method named fetch that logs "Fetching the ball!"

Example:

const animal = new Animal("Lion", "Roar");
animal.makeSound(); // Output: "Roar"

const dog = new Dog("Buddy", "Woof");
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"
`
        },
        answer: `
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    fetch() {
        console.log("Fetching the ball!");
    }
}

const animal = new Animal("Lion", "Roar");
animal.makeSound();

const dog = new Dog("Buddy", "Woof");
dog.makeSound();
dog.fetch();
`
    },
    {
        id: 8,
        question: {
            title: "javascript es6 super keyword",
            description: `
Create a JavaScript class named Person with 
a constructor that takes two parameters: name and age. 
The class should have a method named introduce 
that logs a greeting message including 
the person's name and age.

Next, create a subclass of Person named Student. 
The Student class should have an additional 
property named major and an overridden introduce method. 
The overridden introduce method should 
log a message that includes the person's name, age, and major.

Example:

const person1 = new Person("John", 30);
person1.introduce(); // Output: "Hello, my name is John and I am 30 years old."

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce(); // Output: "Hello, my name is Alice and I am 20 years old. I am majoring in Computer Science."
`
        },
        answer: `
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old. I am majoring in \${this.major}.\`);
    }
}

const person1 = new Person("John", 30);
person1.introduce();

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce();
`
    }
];


