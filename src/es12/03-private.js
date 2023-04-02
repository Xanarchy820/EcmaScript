class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #hablar() {
        return "Hola";
    }
    saludo() {
        return `${this.hablar()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const developer = new user("David", 20);
console.log(developer.uAge);
console.log(developer.uAge = 22);