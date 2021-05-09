import React from 'react'
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css'
import CounterApp from './CounterApp';

const saludo = <h1>hola mundo</h1>

const divRoot = document.querySelector('#root');
console.log(divRoot)

ReactDOM.render(<CounterApp value={3} /> ,divRoot);
// ReactDOM.render(<PrimeraApp saludo="Hola Soy Goku" subtitulo="Soy un subtitulo" />, divRoot);
