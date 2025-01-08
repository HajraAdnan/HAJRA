// 1st point:

function welcomeUser(name) {
    console.log(`Welcome, ${name}! How are you?`);
}

welcomeUser("Adan");


// 2nd point:

function calculateRectangleArea(length, width) {
    return length * width;
}

const area = calculateRectangleArea(15, 3);
console.log(`The area of the rectangle is: ${area}`);


//3rd point:

function describePerson(name, age = 20) {
    return `Name is ${name} and age is ${age}.`;
}

console.log(describePerson("Ali", 30)); 
console.log(describePerson("Anum"));      


//4th point:

const isEven = (number) => number % 2 === 0;

console.log(isEven(8)); 
console.log(isEven(9)); 


//5th point:

const findMax = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

console.log(findMax(15, 30)); 
console.log(findMax(40, 10));  


//6th point:

function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

console.log(isPalindrome("hello")); 
console.log(isPalindrome("madam"));   
console.log(isPalindrome("Madam, rotor, level, racecar")); 


//7th point:

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("peace")); 
console.log(reverseString("environment")); 
