const marks = ['Zuckerberg', 'Wahlburg', 'Ruffalo'];

// for (let i = 0; i < marks.length; i++) {
//   const convertedName = `Mr. ${marks[i]}`;
//   console.log(`hello ${convertedName}`);
// }

const sayHello = function (name) {
  const convertedName = `Mr. ${name}`;
  console.log(`hello ${convertedName}`);
};

const forEachInReverse = function (arr, callback) {
  for (let i = arr.length - 1; i >= 0; i--) {
    callback(arr[i]);
  }
};

forEachInReverse(marks, sayHello);
