
function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("Hello World!");
  }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Hello World!");
    }
    }