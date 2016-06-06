function filter(collection, callback) {
  var results = [];
  each(collection, function(element) {
    if (callback(element)) {
      results.push(element)
    }
  })
  return results;
}

function evens (num) {
  return num % 2 === 0;
}

function evens2 (num) {
  if (num % 2 === 0) {
    return num
  }
}

function each(collection, callback) {
  for (var i = 0; i < collection.length; i++) {
    callback(collection[i])
  }
}

function reduce(collection, callback, accumulator) {
  accumulator === undefined ? accumulator = collection.shift() : accumulator
  each(collection, function(element) {
    accumulator = callback(accumulator, element)
  })

  return accumulator
}

var stupid = [2,2,3]

console.log(reduce(stupid, function(a, b) {
  return a * b
}, 100));
// console.log(filter(stupid, evens2));



