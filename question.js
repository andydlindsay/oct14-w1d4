const sayHello = function(name) {
  console.log(name);
}

const marks = ['Zuckerberg', 'Wahlburg', 'Ruffalo'];

marks.forEach(function(elem) {
  sayHello(elem);
});
