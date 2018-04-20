
const Person = require('./classes/Person.js');

let http = require('http');
let port = process.env.PORT || 3000;
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/json'});
    let json = [];
    json.push(new Person("Jorrit", "Meeuwissen", 20));
    json.push(new Person("Femke", "Lambers", 18));
    response.end(JSON.stringify(json));
}).listen(port);

console.log('Server created on port ' + port);