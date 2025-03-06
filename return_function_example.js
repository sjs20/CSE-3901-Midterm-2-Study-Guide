// Functions can be return values

// grantDegree() will return a function addTitle
function grantDegree() {
	// addTitle will return a name with "Dr. " added to the beginning
	function addTitle(name) {
		return `Dr. ${name}`;
	}
	return addTitle;
}
let phd = grantDegree();
console.log(phd("Turing")); // => Dr. Turing
console.log(phd(3/2)); // => Dr. 1.5
