const name = 'Andy';
const numToes = 10;
const isAwake = true;

// function sayHello(text) {
//   console.log(`hello ${text}`);
// }

const sayHello = function (text) {
  console.log(`hello ${text}`);
};

const sayHello2 = sayHello;
const anotherFunc = sayHello2;
console.log(anotherFunc());
