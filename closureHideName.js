//data not private

// let name = "Top Secret";

// function hideMyName(name) {

// 	function displayName() {
// 	  console.log('inside displayName')
// 		return name;
//   }
// 	return displayName;
// }

// //this will return the displayName function, but it's not invoked
// console.log(hideMyName("Sam"));



//data made private with a closure 

function hideMyName() {
	let name = "Top Secret";

	function displayName() {
		console.log('hello!!!', name);
		return name;
    }
	return displayName;
}

// const myHiddenName = hideMyName();

// myHiddenName();

