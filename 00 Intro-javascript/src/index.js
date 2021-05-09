// ternary operator 
const active = true;
let mensaje = '';
if (active) {
    mensaje = 'Active'
} else {
    mensaje = 'Inactivo'
}
// if else sentences with true and false
const message = (active) ? 'Activo' : 'Inactivo';
// if only true sentence
const mensaje2 = !active && 'Active';

console.log(message);