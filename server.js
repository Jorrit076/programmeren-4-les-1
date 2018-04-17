var http = require('http');

function onRequest(request, response) {
    console.log('onRequest called');
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.end(getData());
}

function getData() {
    console.log('getData called');
    var json = {
        person: {
            name : "Jorrit",
            age  : "20"
        }

    };

    return JSON.stringify(json);
}

http.createServer(onRequest).listen(process.env.PORT || 3000);

console.log('Server created on port 3000');