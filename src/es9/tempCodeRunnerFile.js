async function arrayOfNames(array) {
    for await(let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(["Samuel", "Carlos", "Lesly", "Mario"]);
console.log("Despues");