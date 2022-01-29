function outside() {
  let x = 1;

  function inside(y) {

    console.log(x + y);
    return x + y;
  }

  return inside;
}

const insideOut = outside();
  // the return value of outside() is a the function inside()
    // all the variables that live in inside() are closures
    // the 2 passed into insideOut is being passed to inside() as y
    // insideOut = inside 

insideOut(2);

// console.log("The value of 'x' outside 'outside()' is: " + x);
// console.log(outside())