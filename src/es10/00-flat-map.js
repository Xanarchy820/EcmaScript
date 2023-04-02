// flat
const array = [1, 5, 6, 8, 2, [2, 5, 8, 4, [7, 2, 1]]];

console.log(array.flat(3));

// flat-map

const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v, v * 2]));