// Resource: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
/*
FIND THIS STATEMENT
So our explanation above was all wrong, 
let’s try it again, but correctly this time.
*/  
function createCounter() {
  let counter = 0
  function myFunction() {
    counter = counter + 1
    return counter
  }
  return myFunction
}
const increment = createCounter()
const c1 = increment()
const c2 = increment()
const c3 = increment()
console.log('example increment', c1, c2, c3)

// A closure is a way of keeping access to variables in a function 
// after that function has returned