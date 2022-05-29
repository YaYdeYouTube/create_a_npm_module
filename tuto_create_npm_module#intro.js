function add(x, y) {
    var result = x + y;
    console.log(`${x} + ${y} = ${result}`);
}

function soustraction(x, y) {
    var result = x - y;
    console.log(`${x} - ${y} = ${result}`);
}

function multipication(x, y) {
    var result = x * y;
    console.log(`${x} x ${y} = ${result}`);
}

function division(x, y) {
    var result = x / y;
    console.log(`${x} / ${y} = ${result}`);
}

module.exports = {
    addition: add,
    soustraction: soustraction,
    multipication: multipication,
    division: division
}
