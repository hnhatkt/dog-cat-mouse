var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog');

var mouse = new Mouse('Mickey');
var dog = new Dog();
var cat = new Cat();

try {
	cat.eat(dog);
} catch (error) {
	console.log(error.message);
}


console.log(cat);