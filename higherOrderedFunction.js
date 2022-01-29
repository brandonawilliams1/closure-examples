// Resource: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8
// higher ordered function
// closure is created later in blog
let val = 7
function createAdder() {
  function addNumbers(a, b) {
    let ret = a + b
    return ret
  }
  return addNumbers
}
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function ', sum)