var express = require('express');
var cowsay = require('cowsay');

var app = express();

var books = ["Javascript-The Good Parts", "Eloquent Javascript",
"Horton Hears a Who"];

var menu = {"menu": [
  {
  "id": 1,
  "type": "burger",
  "name": "Cheeseburger",
  "price": 10.99
  },
  {
  "id": 2,
  "type": "pizza",
  "name": "Cheese Pizza",
  "price": 9.99
  },
  {
  "id": 3,
  "type": "burger",
  "name": "Hamburger",
  "price": 8.99
  },
  {
  "id": 4,
  "type": "pizza",
  "name": "Pepperoni Pizza",
  "price": 11.99
  },
  {
  "id": 5,
  "type": "pizza",
  "name": "Sausage Pizza",
  "price": 12.99
}]};

app.get('/cowsay/:cowsays', function(request, response){
  response.setHeader('content-type','text/html');
  response.send(
    "<pre>" +
      cowsay.say({'text': JSON.stringify(menu)}) +
    "</pre>"
  );
})

app.get('/', function(request, response){
  response.json(books);
});

app.listen(8080);
