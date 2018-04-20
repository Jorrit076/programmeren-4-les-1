
const Person = require('./classes/Person.js');
let random_name = require('node-random-name');

let http = require('http');
let port = process.env.PORT || 3000;



http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/json'});
    let json = [];
    json.push(new Person("Jorrit", "Meeuwissen", 20));
    for (let i = 0; i < 10; i++) {
        json.push(new Person(random_name({random: Math.random, first: true}), random_name({random: Math.random, last: true}), Math.floor(Math.random() * 50) + 15));
    }
    response.end(JSON.stringify(json));
}).listen(port);

console.log('Server created on port ' + port);