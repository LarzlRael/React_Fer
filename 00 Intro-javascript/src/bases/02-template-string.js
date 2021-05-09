const nombre = 'Reynaldo';
const apellido = 'xd';

// normal way
//const nombreCompleto = nombre + ' ' + apellido;

// modern way, the way to use is with dollar sign '$'

const fullName = `${nombre} ${apellido}`;

console.log(fullName);

function getSaludo(name){
    return 'Hello word '+name;
}

console.log(`this is a text  ${getSaludo('Joe Doe')}`);