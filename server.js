let http = require('http');

let onRequest = function(request, response) {
    console.log('onRequest called');
    response.writeHead(200, {'Content-Type': 'text/json'});
    response.end(getData());
};

let getData = function() {
    console.log('getData called');
    let json = {
        person: {
            name : "Jorrit",
            age  : "20"
        }

    };

    return JSON.stringify(json);
};

let port = process.env.PORT || 3000;
http.createServer(onRequest).listen(port);

console.log('Server created on port ' + port);