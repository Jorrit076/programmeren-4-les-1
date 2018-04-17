
const Person = require('./classes/Person.js');

let onRequest = function(request, response) {
    console.log('onRequest called');
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.end(getData());
};

let getData = function() {
    console.log('getData called');

    let json = [];
    json.push(new Person("Jorrit", "Meeuwissen", 20));
    json.push(new Person("Maud", "Jacobs", 18));

    return JSON.stringify(json);
};

let http = require('http');
let port = process.env.PORT || 3000;
http.createServer(onRequest).listen(port);

console.log('Server created on port ' + port);