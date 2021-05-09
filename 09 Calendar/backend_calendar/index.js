const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');
require('dotenv').config();
// create the express server
const app = express();

// ! Database 
dbConnection();

// * CORS

app.use(cors());

const port = process.env.PORT;

//routes
// app.get('/',(req,res) => {
//     console.log('se requiere el /');
//     res.json('ok true');
// })

app.use(express.static('public'));


//?  Read and parse the body
app.use(express.json());


//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// listen server

app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}/`);
})