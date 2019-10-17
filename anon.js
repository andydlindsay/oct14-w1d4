const sayHello = function(text) {
  console.log(`hello ${text}`);
};

const higherOrderFunction = function (cb) {
  return cb('Mark');
};

// anonymous functions
higherOrderFunction(function (text) {
  console.log(`hello ${text}`);
});

// const arr = [1,2,3];
// const myFunc = function (element) {
//   console.log(element);
// };
// arr.forEach(myFunc);
// arr.forEach(function (element) {
//   console.log(element);
// });
