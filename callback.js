const sayHello = function (text) {
  console.log(`hello ${text}`);
};

const higherOrderFunction = function(cb) {
  return cb('Mark');
};

// runMyFunction(sayHello);
// runMyFunction(console.log);
