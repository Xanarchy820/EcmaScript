// Declarando una clase
class User {

};

// Instancia de una clase
const newUser = new User();

class user {
    // metodos
    saludo() {
        return "Hola";
    }
};

const xander = new user();
console.log(xander.saludo());

const sharken = new user();
console.log(sharken.saludo());


// Constructor
class user2 {
    constructor() {
        console.log("Nuevo usuario");
    }
    saludo() {
        return "Hola";
    }
}

const samuel = new user2();

// This
class user3 {
    constructor(name) {
        this.name = name;
    }

    hablar() {
        return "Hola";
    }

    saludo() {
        return `${this.hablar()} ${this.name}`;
    }
}

const pablo = new user3("Pablo");
console.log(pablo.saludo());

// setters and getters
class user4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hablar() {
        return "Hola";
    }
    saludo() {
        return `${this.hablar()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const developer = new user4("David", 20);
console.log(developer.uAge);
console.log(developer.uAge = 22);