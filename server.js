
const Person = require('./classes/Person.js');
let random_name = require('node-random-name');
let express = require('express');
let app = express();


let port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    let data = [];
    data.push(new Person("Jorrit", "Meeuwissen", 20));
    for (let i = 0; i < 10; i++) {
        data.push(new Person(random_name({random: Math.random, first: true}), random_name({random: Math.random, last: true}), Math.floor(Math.random() * 50) + 15));
    }
    res.send(JSON.stringify(data));
});

app.listen(port);

console.log('Server created on port ' + port);