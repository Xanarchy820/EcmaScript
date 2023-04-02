function* iterador(arreglo) {
    for(let value of arreglo) {
        yield value;
    }
}

const it = iterador(["Samuel", "David", "Maria", "Carlos", "Amy"]);

console.log(it.next().value); 
console.log(it.next().value);
console.log(it.next().value);