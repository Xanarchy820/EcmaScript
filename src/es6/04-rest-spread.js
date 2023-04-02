// Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

// Object destructuring

let user = {
    username: "Samuel",
    age: 19
}
let{username, age} = user;
console.log(username, user.age);


// Spread operator

let person = {name: "Samuel", age: 19};
let country = "GT";

let data = {id: 1, ...person, country};
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}

sum(1, 1, 2, 3);

// Waos
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)