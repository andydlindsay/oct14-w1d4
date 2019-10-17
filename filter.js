const marks = ['Zuckerberg', 'Wahlburg', 'Ruffalo'];

const filter = function(arr, callback) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      results.push(arr[i]);
    };
  };
  return results;
};

const test = (name) => {
  return name !== 'Zuckerberg';
};

const newMarks = filter(marks, test);
console.log(newMarks);
