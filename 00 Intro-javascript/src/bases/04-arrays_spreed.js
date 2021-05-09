// arrays in js
//const array = new Array(100);
const array = [1, 2, 3, 4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

//? to copy use the spreed operator
let arreglo2 = [...array, 5];

const arreglo3 = arreglo2.map(function (number) {
    return number * 2
});

const arreglo4 = arreglo2.map( (number) =>
     number * 2
);

console.log(arreglo4)