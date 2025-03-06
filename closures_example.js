// Example of closures

function greaterThan(bound) {
    function compare(value) {
        return value > bound;
    }
    return compare; // 1-arg function
}
let testPos = greaterThan(0);
console.log(testPos(4)); //=> true
console.log(testPos(-3)); //=> false