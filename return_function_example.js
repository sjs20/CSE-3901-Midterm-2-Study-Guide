function grantDegree() {
	function addTitle(name) {
		return `Dr. ${name}`;
	}
	return addTitle;
}
let phd = grantDegree();
console.log(phd("Turing"));
console.log(phd(3/2));
