// Functions can be arguments

function apply(f, a) {
    return f(a); // Essentially calls square(a)
}
function square(i) {
    return i * i;
}
console.log(apply(square, 5)); //=> 25
    